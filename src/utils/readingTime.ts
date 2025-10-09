export function getReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const words = (text || '').trim().split(/\s+/).length;
  const time = Math.ceil(words / wordsPerMinute);
  return time;
}

export function formatReadingTime(minutes: number): string {
  return `${minutes} min read`;
} 
