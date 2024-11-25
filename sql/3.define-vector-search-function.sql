create or replace function vector_search (
  query_embeddings vector(1536),
  similarity_threshold float,
  match_count int
)
returns table (
  id bigint,
  content text,
  similarity float
)
language sql stable
as $$
  select
    Documents.id,
    Documents.content,
    1 - (Documents.embeddings <=> query_embeddings) as similarity
  from Documents
  where (1 - Documents.embeddings <=> query_embeddings) > similarity_threshold
  order by Documents.embeddings <=> query_embeddings
  limit match_count;
$$;