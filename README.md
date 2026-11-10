# TAMSA SUZA Election — setup
1. Supabase > SQL Editor > paste `schema.sql` > Run.
2. Supabase > Authentication > Users > Add user (your admin email + password, tick Auto Confirm).
3. SQL Editor, run: `insert into admins select id from auth.users where email='YOUR_ADMIN_EMAIL';`
4. Upload every file in this folder to your GitHub repo root. Settings > Pages > Deploy from branch `main` / root.
5. Voters: `https://USERNAME.github.io/tamsa-suza-election/`  Admin: `.../admin.html`
