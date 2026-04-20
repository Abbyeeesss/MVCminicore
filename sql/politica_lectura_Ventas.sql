alter table public."Ventas" enable row level security;

drop policy if exists "anon_select_Ventas" on public."Ventas";

create policy "anon_select_Ventas"
on public."Ventas"
for select
to anon
using (true);
