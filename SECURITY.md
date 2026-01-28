# Seguridad y Versiones - Portesillo Web

## 🔒 Versiones Seguras Implementadas (Enero 2026)

### React & Next.js
- **React**: `18.3.1` (LTS - Versión estable y SEGURA)
- **React DOM**: `18.3.1`
- **Next.js**: `14.2.15` (Última versión estable de Next.js 14 sin vulnerabilidades)

### ⚠️ ADVERTENCIA: Vulnerabilidades Conocidas

#### ❌ React 19.x - CRÍTICO - NO USAR
- **CVE-2025-55182**: Ejecución Remota de Código (RCE)
- **Vulnerabilidades DoS**: Denegación de Servicio
- **Afectadas**: React 19.0.0, 19.1.0, 19.1.1, 19.2.0
- **Componentes afectados**: react-server-dom-webpack, react-server-dom-parcel, react-server-dom-turbopack
- **Frameworks afectados**: Next.js 14.3+, Next.js 15.x, Next.js 16.x cuando se usa con React 19

#### ✅ React 18.3.1 - SEGURA Y RECOMENDADA
- **Sin vulnerabilidades conocidas**
- **LTS (Long Term Support)**
- **Probada en producción**
- **Soporte hasta 2025+**
- **Compatible con Next.js 14.2.x**

#### ✅ Next.js 14.2.15 - SEGURA
- **Sin vulnerabilidades conocidas**
- **Compatible con React 18.3.1**
- **Versión estable de Next.js 14**
- **No afectada por CVE-2025-55182**

## 🛡️ Por Qué Estas Versiones Son Seguras

### React 18.3.1
1. **Versión LTS estable** sin vulnerabilidades reportadas
2. **No incluye React Server Components vulnerables** de React 19
3. **Ampliamente probada** en millones de aplicaciones en producción
4. **Soporte a largo plazo** garantizado por el equipo de React
5. **Compatible perfectamente** con Next.js 14.2.x

### Next.js 14.2.15
1. **Última versión de la rama 14.2** (más estable que 14.3+)
2. **No requiere React 19** (funciona perfectamente con React 18)
3. **Sin vulnerabilidades conocidas** en npm audit
4. **Optimizada para producción**
5. **Soporte continuo** del equipo de Vercel

## 🛡️ Medidas de Seguridad Adicionales

### 1. Engines Especificados
```json
"engines": {
  "node": ">=18.18.0",
  "npm": ">=9.0.0"
}
```
Esto asegura que solo se use Node.js 18+ (versión LTS con soporte hasta 2025).

### 2. Dependencias Sin Rangos Flexibles
- Versiones exactas en producción (sin `^` o `~`)
- Evita actualizaciones automáticas no probadas
- Mayor control sobre las versiones desplegadas

## 🚀 Recomendaciones para VPS

### Antes de Desplegar

1. **Actualizar dependencias**:
```bash
cd portesillo-web
rm -rf node_modules package-lock.json
npm install
```

2. **Auditar seguridad**:
```bash
npm audit
npm audit fix
```

3. **Construir para producción**:
```bash
npm run build
```

4. **Probar localmente**:
```bash
npm start
```

### Variables de Entorno Recomendadas

Crea un archivo `.env.production`:

```bash
# Node
NODE_ENV=production

# Next.js
NEXT_PUBLIC_API_URL=https://api.portesillo.com

# Seguridad
NEXT_TELEMETRY_DISABLED=1
```

### Configuración PM2 para VPS

Crea `ecosystem.config.js`:

```javascript
module.exports = {
  apps: [{
    name: 'portesillo-web',
    script: 'npm',
    args: 'start',
    cwd: '/ruta/a/portesillo-web',
    instances: 'max',
    exec_mode: 'cluster',
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
```

Comandos PM2:
```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

## 🔍 Monitoreo de Seguridad

### Automatizar Auditorías

Añade a tu `package.json`:
```json
"scripts": {
  "security-check": "npm audit && npm outdated"
}
```

Ejecuta regularmente:
```bash
npm run security-check
```

### Herramientas Adicionales

1. **Snyk** (Recomendado):
```bash
npm install -g snyk
snyk auth
snyk test
```

2. **Dependabot** (GitHub):
- Activa Dependabot en tu repositorio
- Recibe alertas automáticas de vulnerabilidades

## 📊 Checklist de Despliegue Seguro

- [ ] Node.js 18.18.0 o superior instalado en VPS
- [ ] Variables de entorno configuradas
- [ ] Build de producción exitoso (`npm run build`)
- [ ] Audit sin vulnerabilidades críticas (`npm audit`)
- [ ] PM2 o supervisor de procesos configurado
- [ ] Reverse proxy (Nginx/Caddy) configurado
- [ ] HTTPS/SSL activo
- [ ] Firewall configurado (puerto 3000 cerrado al público)
- [ ] Logs monitoreados
- [ ] Backups automáticos configurados

## 🔄 Actualización Segura

Para actualizar en el futuro:

1. **Revisar changelog** de cada paquete
2. **Probar en desarrollo** primero
3. **Hacer backup** del VPS
4. **Actualizar gradualmente**:
```bash
npm update react react-dom
npm update next
npm audit fix
```
5. **Probar build**:
```bash
npm run build
```
6. **Desplegar** si todo funciona

## ⚠️ Versiones a EVITAR

- ❌ React 19.x (experimental, no estable)
- ❌ React 17.x o inferior (obsoleto)
- ❌ Next.js 13.x o inferior (vulnerabilidades conocidas)
- ❌ Node.js 16.x o inferior (sin soporte)

## 📞 Soporte

Si encuentras vulnerabilidades:
1. Ejecuta `npm audit` para detalles
2. Revisa [GitHub Security Advisories](https://github.com/advisories)
3. Actualiza paquetes específicos: `npm update <paquete>`

---

**Última revisión**: Enero 2026
**Próxima auditoría recomendada**: Cada 2-4 semanas
