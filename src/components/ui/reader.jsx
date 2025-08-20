"use client";
import React, { forwardRef } from 'react';
import Link from 'next/link';
import { ArrowLeft, Share2, Heart, Clock, Calendar, User, Tag } from 'lucide-react';
import { cn } from '../../lib/utils';
import Card, { CardContent } from './card';
import Button, { IconButton } from './button';

/**
 * Universal Reader Component
 * 
 * A flexible reader layout for blog-style content pages (slug-based pages).
 * Provides consistent layout, navigation, and interactions for all content types.
 * 
 * @param {Object} props - Component props
 * @param {Object} props.content - Content data object
 * @param {React.ReactNode} props.children - Main content
 * @param {React.ReactNode} props.sidebar - Sidebar content
 * @param {string} props.backHref - URL for back navigation
 * @param {string} props.backLabel - Label for back navigation
 * @param {boolean} props.showMeta - Show meta information
 * @param {boolean} props.showActions - Show action buttons (like, share)
 * @param {Function} props.onLike - Like handler
 * @param {Function} props.onShare - Share handler
 * @param {boolean} props.isLiked - Like state
 * @param {string} props.className - Additional CSS classes
 */
const Reader = forwardRef(({
  content = {},
  children,
  sidebar,
  backHref = '/',
  backLabel = 'Back',
  showMeta = true,
  showActions = true,
  onLike,
  onShare,
  isLiked = false,
  className,
  ...props
}, ref) => {
  const handleShare = async () => {
    if (onShare) {
      onShare();
      return;
    }

    if (navigator.share) {
      try {
        await navigator.share({
          title: content.title || document.title,
          text: content.description || '',
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div ref={ref} className={cn('reader-main', className)} {...props}>
      {/* Header */}
      <ReaderHeader
        backHref={backHref}
        backLabel={backLabel}
        showActions={showActions}
        onLike={onLike}
        onShare={handleShare}
        isLiked={isLiked}
      />

      <div className="reader-container py-8">
        <div className="reader-grid">
          {/* Main Content */}
          <div>
            <Card variant="default" size="lg" className="reader-content mb-8">
              {/* Hero Section */}
              {(content.title || content.image) && (
                <ReaderHero
                  title={content.title}
                  description={content.description}
                  image={content.image}
                  category={content.category}
                  featured={content.featured}
                />
              )}

              {/* Meta Information */}
              {showMeta && (
                <ReaderMeta
                  date={content.date}
                  author={content.author}
                  readTime={content.readTime}
                  tags={content.tags}
                  className="px-8 pb-6"
                />
              )}

              {/* Main Content */}
              <CardContent className="px-8 pb-8">
                <div className="prose max-w-none">
                  {children}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          {sidebar && (
            <div className="reader-sidebar">
              {sidebar}
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

Reader.displayName = 'Reader';

/**
 * Reader Header Component
 */
export const ReaderHeader = ({
  backHref,
  backLabel,
  showActions,
  onLike,
  onShare,
  isLiked
}) => (
  <div className="reader-header">
    <div className="reader-container py-4">
      <div className="flex items-center justify-between">
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-themed-muted hover:text-foreground transition-colors font-['Satoshi']"
        >
          <ArrowLeft className="w-4 h-4" />
          {backLabel}
        </Link>
        {showActions && (
          <div className="flex items-center gap-3">
            {onLike && (
              <IconButton
                variant="ghost"
                icon={<Heart className={cn('w-5 h-5', isLiked && 'fill-current text-destructive')} />}
                onClick={onLike}
                aria-label={isLiked ? 'Unlike' : 'Like'}
              />
            )}
            <IconButton
              variant="ghost"
              icon={<Share2 className="w-5 h-5" />}
              onClick={onShare}
              aria-label="Share"
            />
          </div>
        )}
      </div>
    </div>
  </div>
);

/**
 * Reader Hero Component
 */
export const ReaderHero = ({
  title,
  description,
  image,
  category,
  featured,
  imageAspectRatio = 'aspect-[2/1]'
}) => (
  <div className="relative">
    {image && (
      <div className={cn('relative overflow-hidden', imageAspectRatio)}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        
        {/* Badges */}
      {category && (
        <div className="absolute top-4 left-6">
          <span className="inline-block px-3 py-1 bg-themed-card backdrop-blur-sm text-foreground text-sm font-medium font-['Satoshi'] rounded-full">
            {category}
          </span>
        </div>
      )}
      {featured && (
        <div className="absolute top-4 right-6">
          <span className="inline-block px-3 py-1 bg-themed-primary backdrop-blur-sm text-primary-foreground text-sm font-medium font-['Satoshi'] rounded-full">
            Featured
          </span>
        </div>
      )}        {/* Title Overlay */}
        {title && (
          <div className="absolute bottom-8 left-8 right-8">
            <h1 className="text-white font-semibold text-4xl leading-tight mb-4 font-['Erode']">
              {title}
            </h1>
            {description && (
              <p className="text-white/90 text-lg leading-relaxed max-w-3xl font-['Satoshi']">
                {description}
              </p>
            )}
          </div>
        )}
      </div>
    )}

    {/* Title without image */}
    {title && !image && (
      <div className="p-8 border-b border-themed">
        <h1 className="text-4xl font-light text-foreground mb-4 leading-tight font-['Erode']">
          {title}
        </h1>
        {description && (
          <p className="text-xl text-themed-muted leading-relaxed font-['Satoshi']">
            {description}
          </p>
        )}
      </div>
    )}
  </div>
);

/**
 * Reader Meta Component
 */
export const ReaderMeta = ({
  date,
  author,
  readTime,
  tags,
  className
}) => {
  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className={cn('border-b border-themed', className)}>
      <div className="flex flex-wrap items-center gap-4 mb-6">
        {date && (
          <div className="flex items-center gap-2 text-sm text-themed-muted font-['Satoshi']">
            <Calendar className="w-4 h-4" />
            {formatDate(date)}
          </div>
        )}
        {author && (
          <div className="flex items-center gap-2 text-sm text-themed-muted font-['Satoshi']">
            <User className="w-4 h-4" />
            {typeof author === 'string' ? author : author.name}
          </div>
        )}
        {readTime && (
          <div className="flex items-center gap-2 text-sm text-themed-muted font-['Satoshi']">
            <Clock className="w-4 h-4" />
            {readTime}
          </div>
        )}
      </div>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 pb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1 px-3 py-1 bg-themed-secondary border border-themed text-sm rounded-full font-['Satoshi']"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

/**
 * Reader Sidebar Card Component
 */
export const ReaderSidebarCard = forwardRef(({
  title,
  children,
  icon: Icon,
  className,
  ...props
}, ref) => (
  <Card ref={ref} variant="default" size="md" className={cn('mb-6', className)} {...props}>
    {title && (
      <div className="flex items-center gap-3 mb-6">
        {Icon && (
          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon className="w-4 h-4 text-primary" />
          </div>
        )}
        <h3 className="text-lg font-semibold text-foreground font-['Erode']">{title}</h3>
      </div>
    )}
    {children}
  </Card>
));
ReaderSidebarCard.displayName = 'ReaderSidebarCard';

/**
 * Reader Navigation Component
 */
export const ReaderNavigation = ({
  previous,
  next,
  className
}) => (
  <Card variant="default" size="md" className={cn('', className)}>
    <div className="flex items-center justify-between">
      {previous ? (
        <Link
          href={previous.href}
          className="flex items-center gap-2 text-themed-muted hover:text-foreground transition-colors group font-['Satoshi']"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <div>
            <div className="text-xs uppercase tracking-wider mb-1 font-['Satoshi']">Previous</div>
            <div className="font-medium font-['Erode']">{previous.title}</div>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {next && (
        <Link
          href={next.href}
          className="flex items-center gap-2 text-themed-muted hover:text-foreground transition-colors text-right group font-['Satoshi']"
        >
          <div>
            <div className="text-xs uppercase tracking-wider mb-1 font-['Satoshi']">Next</div>
            <div className="font-medium font-['Erode']">{next.title}</div>
          </div>
          <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
        </Link>
      )}
    </div>
  </Card>
);

/**
 * Reader Related Items Component
 */
export const ReaderRelated = ({
  title = 'Related Items',
  items = [],
  className
}) => (
  <ReaderSidebarCard title={title} className={className}>
    <div className="space-y-4">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="block p-3 rounded-xl border border-themed hover:border-primary/30 transition-colors group"
        >
          <h4 className="font-medium text-foreground text-sm mb-1 group-hover:text-primary transition-colors line-clamp-2 font-['Erode']">
            {item.title}
          </h4>
          <p className="text-xs text-themed-muted font-['Satoshi']">{item.subtitle}</p>
        </Link>
      ))}
    </div>
  </ReaderSidebarCard>
);

export default Reader;
