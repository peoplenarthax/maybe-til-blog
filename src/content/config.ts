import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    contentType: z.literal('post').default('post'),
  }),
});

const readings = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    contentType: z.literal('reading').default('reading'),
    
    // Original content information (all optional to start simple)
    originalTitle: z.string().optional(),
    originalAuthor: z.string().optional(),
    originalUrl: z.string().url().optional(),
    originalSite: z.string().optional(),
    originalPubDate: z.coerce.date().optional(),
    
    // Your commentary (all optional)
    personalNotes: z.string().optional(),
    keyTakeaways: z.array(z.string()).default([]),
    readingTime: z.number().optional(),
    briefSummary: z.string().optional(), // Brief summary/tl;dr of the original article
    
    // Visual elements (optional)
    heroImage: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroImage: z.string().optional(),
    technologies: z.array(z.string()).default([]),
    githubUrl: z.string().optional(),
    liveUrl: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = { posts, readings, projects }; 
