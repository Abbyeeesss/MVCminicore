alter table public."Reglas" enable row level security;
drop policy if exists "anon_select_Reglas" on public."Reglas";
create policy "anon_select_Reglas"
on public."Reglas"
for select
to anon
using (true);

alter table public."Vendedor" enable row level security;
drop policy if exists "anon_select_Vendedor" on public."Vendedor";
create policy "anon_select_Vendedor"
on public."Vendedor"
for select
to anon
using (true);
