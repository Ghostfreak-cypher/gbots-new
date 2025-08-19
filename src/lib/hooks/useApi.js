'use client';

import { useState, useEffect, useCallback } from 'react';
import { apiUtils } from '@/lib/apiService';

/**
 * Custom hook for managing API data with loading, error, and refresh states
 * @param {Function} apiFunction - The API function to call
 * @param {Array} dependencies - Dependencies array for useEffect
 * @param {Object} options - Options for the hook
 */
export function useApiData(apiFunction, dependencies = [], options = {}) {
  const {
    initialData = null,
    autoFetch = true,
    onSuccess = null,
    onError = null
  } = options;

  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (...args) => {
    try {
      setLoading(true);
      setError(null);
      
      const result = await apiFunction(...args);
      setData(result);
      
      if (onSuccess) {
        onSuccess(result);
      }
      
      return result;
    } catch (err) {
      const errorMessage = apiUtils.handleError(err);
      setError(errorMessage);
      
      if (onError) {
        onError(errorMessage);
      }
      
      throw err;
    } finally {
      setLoading(false);
    }
  }, [apiFunction, onSuccess, onError]);

  const refresh = useCallback(() => {
    return fetchData();
  }, [fetchData]);

  // Clear error
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  // Update data manually
  const updateData = useCallback((newData) => {
    setData(newData);
  }, []);

  useEffect(() => {
    if (autoFetch) {
      fetchData();
    }
  }, dependencies);

  return {
    data,
    loading,
    error,
    fetchData,
    refresh,
    clearError,
    updateData
  };
}

/**
 * Hook for managing paginated API data
 */
export function usePaginatedApi(apiFunction, options = {}) {
  const {
    limit = 10,
    initialPage = 1,
    onSuccess = null,
    onError = null
  } = options;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(initialPage);
  const [hasMore, setHasMore] = useState(true);
  const [total, setTotal] = useState(0);

  const fetchData = useCallback(async (pageNum = 1, append = false) => {
    try {
      if (append) {
        setLoadingMore(true);
      } else {
        setLoading(true);
      }
      setError(null);
      
      const result = await apiFunction({ page: pageNum, limit });
      
      if (result.achievements || result.teamMembers) {
        const items = result.achievements || result.teamMembers || [];
        const newData = append ? [...data, ...items] : items;
        
        setData(newData);
        setTotal(result.total || items.length);
        
        if (result.pagination) {
          setHasMore(pageNum < result.pagination.totalPages);
        } else {
          setHasMore(items.length === limit);
        }
      }
      
      if (onSuccess) {
        onSuccess(result);
      }
      
      return result;
    } catch (err) {
      const errorMessage = apiUtils.handleError(err);
      setError(errorMessage);
      
      if (onError) {
        onError(errorMessage);
      }
      
      throw err;
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }, [apiFunction, data, limit, onSuccess, onError]);

  const loadMore = useCallback(async () => {
    if (!hasMore || loadingMore) return;
    
    const nextPage = page + 1;
    setPage(nextPage);
    return await fetchData(nextPage, true);
  }, [hasMore, loadingMore, page, fetchData]);

  const refresh = useCallback(() => {
    setPage(1);
    return fetchData(1, false);
  }, [fetchData]);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  useEffect(() => {
    fetchData(1, false);
  }, []);

  return {
    data,
    loading,
    loadingMore,
    error,
    hasMore,
    total,
    page,
    loadMore,
    refresh,
    clearError
  };
}

/**
 * Hook for form submission with API integration
 */
export function useApiSubmit(apiFunction, options = {}) {
  const {
    onSuccess = null,
    onError = null,
    resetOnSuccess = false
  } = options;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const submit = useCallback(async (data, ...args) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(null);
      
      const result = await apiFunction(data, ...args);
      setSuccess(result.message || 'Operation completed successfully');
      
      if (onSuccess) {
        onSuccess(result);
      }
      
      return result;
    } catch (err) {
      const errorMessage = apiUtils.handleError(err);
      setError(errorMessage);
      
      if (onError) {
        onError(errorMessage);
      }
      
      throw err;
    } finally {
      setLoading(false);
    }
  }, [apiFunction, onSuccess, onError]);

  const clearMessages = useCallback(() => {
    setError(null);
    setSuccess(null);
  }, []);

  return {
    submit,
    loading,
    error,
    success,
    clearMessages
  };
}
