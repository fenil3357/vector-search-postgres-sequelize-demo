create table documents (
  id bigserial primary key,
  content text,
  embeddings vector(1536)
);