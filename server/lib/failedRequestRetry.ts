/**
 * Tracks request IDs that have already been auto-retried once.
 * Shared between MediaRequestSubscriber (retry + notify logic)
 * and the manual retry route (pre-mark so failure notifies immediately).
 */
export const autoRetriedIds = new Set<number>();
