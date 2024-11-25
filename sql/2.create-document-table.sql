create table Documents (
  id bigserial primary key,
  content text,
  embeddings vector(1536)
);