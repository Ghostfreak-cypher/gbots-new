import axios from 'axios';

// Create axios instance with base configuration
const apiClient = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token if available
apiClient.interceptors.request.use(
  (config) => {
    // Get user from localStorage and add token if available
    const user = localStorage.getItem('user');
    if (user) {
      const userData = JSON.parse(user);
      if (userData.token) {
        config.headers.Authorization = `Bearer ${userData.token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle common error scenarios
    if (error.response?.status === 401) {
      // Unauthorized - clear user data and redirect to login
      localStorage.removeItem('user');
      window.location.href = '/auth';
    }
    return Promise.reject(error);
  }
);

// Auth API methods
export const authAPI = {
  // Login user
  login: async (credentials) => {
    try {
      const response = await apiClient.post('/auth/login', credentials);
      return response.data;
    } catch (error) {
      throw error.response?.data || { success: false, message: 'Login failed' };
    }
  },

  // Register user (send OTP)
  registerSendOTP: async (userData) => {
    try {
      const response = await apiClient.post('/auth/register', {
        ...userData,
        step: 'send_otp'
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { success: false, message: 'Registration failed' };
    }
  },

  // Complete registration with OTP
  registerComplete: async (userData) => {
    try {
      const response = await apiClient.post('/auth/register', {
        ...userData,
        step: 'complete_registration'
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { success: false, message: 'Registration failed' };
    }
  },

  // Send OTP
  sendOTP: async (email, type = 'registration', name = '') => {
    try {
      const response = await apiClient.post('/auth/send-otp', {
        email,
        type,
        name
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { success: false, message: 'Failed to send OTP' };
    }
  },

  // Verify OTP
  verifyOTP: async (email, otp, type = 'registration') => {
    try {
      const response = await apiClient.post('/auth/verify-otp', {
        email,
        otp,
        type
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { success: false, message: 'OTP verification failed' };
    }
  }
};

// Achievements API methods
export const achievementsAPI = {
  // Get all achievements with optional pagination
  getAll: async (options = {}) => {
    try {
      const params = new URLSearchParams();
      if (options.limit) params.append('limit', options.limit);
      if (options.page) params.append('page', options.page);
      
      const response = await apiClient.get(`/achievements/get?${params}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { error: 'Failed to fetch achievements' };
    }
  },

  // Get specific achievement by ID
  getById: async (id) => {
    try {
      const response = await apiClient.get(`/achievements/get?id=${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { error: 'Failed to fetch achievement' };
    }
  },

  // Create new achievement (admin only) - handles FormData
  create: async (formData) => {
    try {
      const response = await axios.post('/api/achievements/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        timeout: 30000, // 30 seconds for file uploads
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { error: 'Failed to create achievement' };
    }
  },

  // Update achievement (admin only) - handles FormData
  update: async (id, formData) => {
    try {
      const response = await axios.post(`/api/achievements/update?id=${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        timeout: 30000, // 30 seconds for file uploads
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { error: 'Failed to update achievement' };
    }
  }
};

// Team Members API methods
export const teamAPI = {
  // Get all team members with optional filters
  getAll: async (filters = {}) => {
    try {
      const params = new URLSearchParams();
      if (filters.role) params.append('role', filters.role);
      if (filters.department) params.append('department', filters.department);
      if (filters.year) params.append('year', filters.year);
      if (filters.leavingYear) params.append('leavingYear', filters.leavingYear);
      if (filters.activity !== undefined) params.append('activity', filters.activity);
      
      const response = await apiClient.get(`/TeamMembers/read?${params}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { error: 'Failed to fetch team members' };
    }
  },

  // Get specific team member by ID
  getById: async (id) => {
    try {
      const response = await apiClient.get(`/TeamMembers/read?id=${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { error: 'Failed to fetch team member' };
    }
  },

  // Create new team member (admin only) - handles FormData
  create: async (formData) => {
    try {
      const response = await axios.post('/api/TeamMembers/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        timeout: 30000, // 30 seconds for file uploads
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { error: 'Failed to create team member' };
    }
  },

  // Update team member (admin only) - handles FormData
  update: async (id, formData) => {
    try {
      const response = await axios.put(`/api/TeamMembers/update?id=${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        timeout: 30000, // 30 seconds for file uploads
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { error: 'Failed to update team member' };
    }
  }
};

// Users API methods
export const usersAPI = {
  // Get all users with optional filters
  getAll: async (filters = {}) => {
    try {
      const params = new URLSearchParams();
      if (filters.status) params.append('status', filters.status);
      if (filters.role) params.append('role', filters.role);
      if (filters.limit) params.append('limit', filters.limit);
      if (filters.page) params.append('page', filters.page);
      
      const response = await apiClient.get(`/users/get?${params}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { error: 'Failed to fetch users' };
    }
  },

  // Get specific user by ID
  getById: async (id) => {
    try {
      const response = await apiClient.get(`/users/get?id=${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { error: 'Failed to fetch user' };
    }
  }
};

// Events API methods
export const eventsAPI = {
  // Get all events with optional filters
  getAll: async (filters = {}) => {
    try {
      const params = new URLSearchParams();
      if (filters.status) params.append('status', filters.status);
      if (filters.limit) params.append('limit', filters.limit);
      if (filters.page) params.append('page', filters.page);
      
      const response = await apiClient.get(`/events/get?${params}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { error: 'Failed to fetch events' };
    }
  },

  // Get specific event by ID
  getById: async (id) => {
    try {
      const response = await apiClient.get(`/events/get?id=${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { error: 'Failed to fetch event' };
    }
  }
};

// Projects API methods
export const projectsAPI = {
  // Get all projects with filters/pagination
  getAll: async (filters = {}) => {
    try {
      const params = new URLSearchParams();
      if (filters.category) params.append('category', filters.category);
      if (filters.year) params.append('year', filters.year);
      if (filters.weightClass) params.append('weightClass', filters.weightClass);
      if (filters.search) params.append('search', filters.search);
      if (filters.page) params.append('page', filters.page);
      if (filters.limit) params.append('limit', filters.limit);
      const response = await apiClient.get(`/projects/read?${params}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { error: 'Failed to fetch projects' };
    }
  },

  // Get project by slug
  getBySlug: async (slug) => {
    try {
      const response = await apiClient.get(`/projects/read?slug=${encodeURIComponent(slug)}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { error: 'Failed to fetch project' };
    }
  },
};

// Admin API methods
export const adminAPI = {
  // Get admin dashboard statistics
  getStats: async () => {
    try {
      const response = await apiClient.get('/admin/stats');
      return response.data;
    } catch (error) {
      throw error.response?.data || { error: 'Failed to fetch admin stats' };
    }
  }
};

// Generic API utility functions
export const apiUtils = {
  // Handle API errors consistently
  handleError: (error) => {
    console.error('API Error:', error);
    
    if (error.response) {
      // Server responded with error status
      return error.response.data?.message || error.response.data?.error || 'Server error occurred';
    } else if (error.request) {
      // Request was made but no response received
      return 'Network error. Please check your connection.';
    } else {
      // Something else happened
      return error.message || 'An unexpected error occurred';
    }
  },

  // Format API response data
  formatResponse: (response, defaultData = null) => {
    if (response?.success || response?.message) {
      return response;
    }
    return defaultData;
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    const user = localStorage.getItem('user');
    return !!user;
  },

  // Get current user data
  getCurrentUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  // Clear user session
  clearSession: () => {
    localStorage.removeItem('user');
  }
};

export default apiClient;
