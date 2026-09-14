# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Lightweight static web application (HTML, CSS, JavaScript)

## Users

- **Equipos de desarrollo y canales digitales:** Ingenieros de software mobile (iOS, Android, multiplataforma), líderes técnicos y equipos de producto que necesitan construir, operar y evolucionar aplicaciones móviles de canal de forma rápida, segura, reutilizable y alineada con los más altos estándares corporativos.
- **Arquitectos y líderes de plataforma TI:** Especialistas responsables de definir lineamientos de arquitectura, seguridad, observabilidad, gobernanza y aceleradores transversales para evitar la duplicación de esfuerzos técnicos.
- **Líderes de producto (POs) y diseñadores de experiencia (UX/UI):** Diseñadores y decisores de negocio que requieren conocer las capacidades disponibles (componentes del sistema de diseño, widgets especializados, journeys dinámicos) para idear soluciones viables y reutilizables sin partir desde cero.

## Product Purpose

- **Portal unificado de exposición y autoservicio de capacidades mobile:** Funcionar como la vitrina digital interactiva, intuitiva y centralizada que da a conocer todo el ecosistema de capacidades de la plataforma mobile **Galatea**.
- **Materializar el Hilo Conductor de desarrollo:** Acompañar a los equipos en cada una de las fases del ciclo de vida para "hacer canal": desde una necesidad de negocio hasta una aplicación operativa, gobernada y en constante evolución.
- **Acelerar la entrega de valor y reducir reprocesos:** Eliminar el esfuerzo repetitivo en capacidades transversales (navegación, sesión, seguridad, red, componentes visuales), permitiendo que los equipos de canal concentren sus recursos en resolver necesidades de negocio y mejorar la experiencia de los usuarios.

## Positioning

- **Galatea como plataforma de capacidades mobile:** No se concibe como un listado aislado de librerías, sino como un ecosistema integral de habilitadores (lineamientos, componentes, frameworks, configuración remota, observabilidad, gobierno y automatización).
- **El portal "Hilo Conductor":** La plataforma web que articula la estrategia tecnológica: conecta la necesidad de negocio con habilitadores reutilizables, guiando paso a paso a los equipos en el ciclo de vida de desarrollo mobile.

## Operating Context

- **Entorno corporativo web accesible:** Diseñado para consulta ágil desde estaciones de trabajo de escritorio y dispositivos móviles por parte de equipos distribuidos.
- **Hub de descubrimiento y documentación viva:** Punto de referencia permanente para la ideación de nuevas funcionalidades, onboarding de nuevos desarrolladores o evaluación del estado de madurez de cada capacidad de plataforma.

## Capabilities and Constraints

### 1. El Hilo Conductor para Crear y Evolucionar una App de Canal

El portal articula el flujo integral de transformación de una necesidad de negocio en una aplicación mobile de alto impacto:

```
[Necesidad del canal] 
      ↓
[App base común] (Mobile Starter Kit)
      ↓
[Experiencia visual estándar] (Design System & Catálogo de Widgets)
      ↓
[Capacidades reutilizables] (Plugins SDK & API Consumption Framework)
      ↓
[Journeys dinámicos] (Backend Driven UI, Motor de flujos y formularios)
      ↓
[Gobierno y operación] (Feature Flags, Configuración Remota, App Manager)
      ↓
[Medición y evolución] (Observabilidad 360, Analítica y Mejora continua)
```

#### Ciclo de Vida Mobile en el Hilo Conductor:
1. **Idear y diseñar:** Figma, Sistema de Diseño, Catálogo de Widgets, Templates y Ejemplos.
2. **Construir:** Mobile Starter Kit, API Consumption Framework, Plugins base.
3. **Migrar y modernizar:** Asistentes y MCP para migraciones, IA en Developer Experience, estándares de arquitectura y refactor asistido.
4. **Configurar y gobernar:** Feature Flags, Configuración Remota, App Manager, Multilenguaje.
5. **Componer experiencias dinámicas:** Backend Driven UI (BDUI), Motor de flujos, Miniapps, Motor de formularios dinámicos, A2UI (Agent to UI).
6. **Probar y liberar:** Experimentación, activación controlada por segmentos, validaciones de arquitectura y despliegue seguro.
7. **Operar y observar:** Plataforma de observabilidad integral, servicios de analítica 360, telemetría técnica (crashes, métricas) y feedback de clientes.
8. **Evolucionar y optimizar:** Análisis continuo de comportamiento, optimización y evolución de roadmap.

---

### 2. Bloques Estratégicos y Catálogo Completo de Capacidades

#### Bloque 1: Experiencia y Consistencia Visual
*Propósito:* Asegurar experiencias homogéneas, accesibles, reutilizables y preparadas para distintos contextos de usuario, idioma o región.

- **1. Sistema de Diseño (Design System) [Madurez: 4 - Estandarizada | Prioridad: Alta]**
  - *Qué ofrece:* Guías UX/UI, tokens de diseño (colores, espaciados, tipografías), componentes visuales universales (botones, cards, inputs, selectores), patrones de navegación, accesibilidad y modo oscuro.
  - *Beneficio:* Los canales no diseñan desde cero y todas las aplicaciones mantienen la misma experiencia de marca.
  - *Oportunidad / Brecha:* Mantener gobierno, adopción y alineación continua de tokens y accesibilidad.
- **2. Catálogo de Widgets Especializados [Madurez: 3 - Disponible | Prioridad: Alta]**
  - *Qué ofrece:* Biblioteca de componentes especializados para casos de uso del negocio (detalle de productos, vinculación digital, listado de productos y servicios, validación de segundo factor de autenticación).
  - *Beneficio:* Los equipos reutilizan componentes de negocio ya construidos, probados y auditados.
  - *Oportunidad / Brecha:* Consolidar un portal interactivo para exponer widgets, ejemplos, guías y criterios de reutilización.
- **11. Multilenguaje y Regionalización [Madurez: 3 - Disponible]**
  - *Qué ofrece:* Soporte para múltiples idiomas y configuraciones regionales sin modificar código: traducción dinámica de textos, formatos numéricos y monetarios, adaptación regional y selección desde el dispositivo o gobernada desde App Manager.
  - *Beneficio:* Preparación inmediata para operar en diferentes idiomas o regiones sin reingeniería.
  - *Oportunidad / Brecha:* Evaluar la extracción de archivos de configuración multilenguaje fuera del frontend.

#### Bloque 2: Base Técnica para Construir Canal
*Propósito:* Reducir el esfuerzo inicial de construcción y entregar una base común sólida para navegación, sesión, seguridad y consumo de servicios.

- **3. Mobile Starter Kit (App Base) [Madurez: 3 - Disponible | Prioridad: Media-Baja]**
  - *Qué ofrece:* Plantilla base preconfigurada con arquitectura definida, sistema de navegación, manejo de sesión de usuario, manejo centralizado de errores, logging estructurado, telemetría de analítica, configuración remota y seguridad base.
  - *Beneficio:* En lugar de invertir semanas creando infraestructura técnica, los equipos integran el starter kit e inician de inmediato el desarrollo del negocio.
  - *Oportunidad / Brecha:* Definir criterios de aceptación formales, alcance mínimo y ruta de adopción para nuevos canales.
- **4. Plugins como Capacidades (SDK de Capacidades) [Madurez: 2 - En construcción | Prioridad: Media]**
  - *Qué ofrece:* Capacidades nativas comunes encapsuladas bajo un SDK gobernado: cámara, biometría, escáner QR, geolocalización, compartir archivos, deep links, notificaciones push, A/B testing y SDKs analíticos/mercadeo.
  - *Beneficio:* Evita que cada equipo implemente las mismas capacidades nativas de maneras dispares, centralizando estándares técnicos y gobierno.
  - *Oportunidad / Brecha:* Finalizar la construcción del SDK unificado y habilitar el portal para exponer el catálogo de plugins.
- **15. API Consumption Framework (BaseApiClient) [Madurez: 3 - Disponible]**
  - *Qué ofrece:* Framework estandarizado para consumo de servicios backend: capa de networking, políticas de reintento inteligente (retry), circuit breaker, caché local y observabilidad de peticiones.
  - *Beneficio:* Elimina implementaciones duplicadas de red y estandariza la resiliencia en la comunicación con microservicios.
  - *Oportunidad / Brecha:* Formalizar la definición estandarizada de consumo y contratos backend.
- **Onboarding de Plataforma [En evolución]**
  - *Qué ofrece:* Rutas de aprendizaje e incorporación técnica (onboarding funcional, onboarding para equipos consumidores de capacidades, onboarding interno del equipo Galatea y guías para contribuidores).

#### Bloque 3: Construcción Modular y Dinámica de Experiencias
*Propósito:* Permitir que los canales creen journeys, pantallas y formularios configurables, reduciendo la dependencia de despliegues tradicionales en tiendas de aplicaciones.

- **5. Backend Driven UI (BDUI) [Madurez: 2 - En construcción | Prioridad: Alta]**
  - *Qué ofrece:* Modelo donde la app recibe desde backend la definición declarativa de pantallas y componentes (JSON), personalización dinámica por segmento y activación de campañas en tiempo real.
  - *Beneficio:* Máxima agilidad para publicar cambios y promociones sin requerir una nueva versión de la app ni aprobación de tiendas.
  - *Oportunidad / Brecha:* Terminar la estructuración backend, definir modelo de gobierno, guía de uso y estrategia de primer cliente.
- **6. Motor de Flujos, Miniapps y Pantallas (Low Code) [Madurez: 2 - En construcción | Prioridad: Alta]**
  - *Qué ofrece:* Motor para componer flujos de negocio parametrizados (p. ej., solicitud de productos paso a paso: selección -> datos -> términos -> validación -> comprobante), navegación configurable y validaciones centralizadas.
  - *Beneficio:* Los canales construyen procesos integrales reutilizando journeys predefinidos en vez de codificar pantalla por pantalla.
  - *Oportunidad / Brecha:* Aterrizar el modelo operativo y articulación con herramientas de desarrollo visual.
- **14. Motor de Formularios Dinámicos [Madurez: 2 - En construcción]**
  - *Qué ofrece:* Generación de formularios configurables (actualización de datos, encuestas, solicitudes), validaciones en tiempo real, dependencias condicionales entre campos y reglas de obligatoriedad.
  - *Beneficio:* Evita desarrollar e iterar pantallas de formularios repetitivamente.

#### Bloque 4: Gobierno, Configuración y Control Operativo
*Propósito:* Habilitar activaciones controladas, parametrización remota, administración centralizada y apagado rápido de funcionalidades.

- **7. Feature Flags y Experimentación [Madurez: 3 - Disponible]**
  - *Qué ofrece:* Activación o desactivación gradual de funciones por usuario o segmento, experimentación (pruebas A/B) y apagado rápido (kill-switch) ante anomalías.
  - *Beneficio:* Despliegues continuos con drástica reducción de riesgo operacional.
  - *Oportunidad / Brecha:* Profundizar la articulación de feature flags con el resto de capacidades de plataforma.
- **10. Configuración Remota [Madurez: 3 - Disponible]**
  - *Qué ofrece:* Parametrización en caliente de variables técnicas (URLs de endpoints, timeouts) y variables operativas de negocio (topes transaccionales, montos máximos).
  - *Beneficio:* Cambios operativos y de negocio inmediatos sin desplegar código.
  - *Oportunidad / Brecha:* Analizar capacidades existentes con información en JSON susceptibles de migrar a configuración remota.
- **17. App Manager [Madurez: 2 - En evolución]**
  - *Qué ofrece:* Plataforma centralizada para gobernar el ciclo de vida de las aplicaciones, versionamiento, administración de parámetros y control operativo de apps de canal.
  - *Beneficio:* Centralización del gobierno técnico y operativo de múltiples aplicaciones.

#### Bloque 5: Observabilidad, Analítica y Evolución
*Propósito:* Medir el comportamiento del usuario, monitorear la salud operacional técnica y tomar decisiones fundamentadas en datos.

- **8. Servicios de Analítica [Madurez: 3 - Disponible]**
  - *Qué ofrece:* Dashboards centralizados con visión 360 del usuario, métricas de interacción en journeys y detección de puntos de abandono (funnels de conversión).
  - *Beneficio:* Todos los canales miden y comparan su rendimiento bajo el mismo estándar analítico.
- **12. Plataforma de Observabilidad del Cliente [Madurez: 3 - Disponible]**
  - *Qué ofrece:* Integración de telemetría completa de aplicaciones y canales, crash reporting en tiempo real, trazabilidad distribuida y sistemas de alertamiento preventivo.
  - *Beneficio:* Detección y resolución de problemas técnicos antes de que generen impacto masivo en los usuarios.
  - *Oportunidad / Brecha:* Aterrizar la visión integral 360 combinando telemetría técnica, analítica de producto y feedback directo de usuarios.

#### Bloque 6: Developer Experience (DevEx) e Inteligencia Artificial
*Propósito:* Maximizar la productividad de los desarrolladores mediante asistencia inteligente, automatización y nuevos paradigmas de interacción.

- **9. Experiencias Conversacionales y A2UI (Agent to UI) [Madurez: 1 - Conceptualizada | Prioridad: 1]**
  - *Qué ofrece:* Modelo de integración basado en capacidades expuestas como funciones/herramientas invocables por agentes de IA, orquestación de servicios y generación dinámica de interfaz reactiva al diálogo.
  - *Beneficio:* Los canales incorporan experiencias asistidas por IA invocando capacidades estandarizadas sin preocuparse por la implementación subyacente.
- **16. IA en Developer Experience (DevEx) & MCP [Madurez: 1 - Conceptualizada | Prioridad: 2]**
  - *Qué ofrece:* Asistentes inteligentes para desarrolladores, integración de servidores Model Context Protocol (MCP) para migraciones, validación automática de estándares de arquitectura y refactorización guiada.
  - *Beneficio:* Acelera drásticamente la curva de aprendizaje de la plataforma y eleva la calidad del código en los canales.
  - *Oportunidad / Brecha:* Crear una capacidad centralizada donde se expongan todas las herramientas de IA para desarrollo.

#### Bloque 7: Ecosistemas y Capacidades Embebiles (Exploración Estratégica)
*Propósito:* Proyectar las capacidades de la plataforma hacia ecosistemas abiertos y alianzas con terceros.

- **API-first / Contratos Reutilizables [Madurez: 2 - En construcción | Prioridad: Media]:** Definición rigurosa de contratos antes de la interfaz, componentes reutilizables, versionamiento y consumo estándar de capacidades.
- **Open Banking Readiness Mobile [Madurez: 1 - Conceptualizada | Prioridad: Media]:** Preparación de la arquitectura mobile para flujos de consentimiento informado, agregación de información con terceros, permisos y confianza digital.
- **Embedded Finance Readiness [Madurez: 1 - Conceptualizada | Prioridad: Media]:** Identificación de capacidades desacoplables para ser embebidas en otros ecosistemas (autenticación, pagos, lectura QR, biometría, comprobantes y onboarding) mediante SDKs gobernados.

---

### 3. Matriz de Madurez de Capacidades

| Nivel | Nombre | Criterio de Lectura |
|---|---|---|
| **0** | **Idea o necesidad identificada** | Existe la oportunidad, pero aún no hay definición clara de alcance, dueño o solución técnica. |
| **1** | **Conceptualizada** | Hay entendimiento claro del problema, hipótesis o alcance inicial, pero falta implementación o validación. |
| **2** | **En construcción** | La capacidad está siendo implementada, ajustada o validada técnicamente en la plataforma. |
| **3** | **Disponible** | Puede ser usada por uno o varios canales; puede requerir mayor documentación, gobierno o adopción. |
| **4** | **Estandarizada** | Cuenta con lineamientos oficiales, documentación completa, criterios claros de uso, soporte y gobierno básico. |
| **5** | **Gestionada y escalada** | Adopción amplia en toda la organización, métricas consolidadas, dueños asignados, roadmap activo y mejora continua. |

---

### 4. Priorización Estratégica Inmediata

1. **Experiencias conversacionales y A2UI**
2. **IA en Developer Experience (DevEx)**
3. **Backend Driven UI (BDUI):** Estrategia desde el norte, evolución y primer canal adoptante.
4. **Low Code:** Motor de flujos y formularios dinámicos.

---

### 5. Requerimientos para la Construcción de la Página Web

- **Explorador del Hilo Conductor:** Visualización interactiva de las etapas del ciclo de desarrollo mobile (de la necesidad al producto operativo y en evolución).
- **Catálogo Interactivo de Capacidades:** Filtros por Bloque Estratégico, Nivel de Madurez (0 a 5) y Prioridad, con buscador en tiempo real.
- **Ficha Detallada de Capacidad:** Modal o vista expandida con: Qué ofrece, Beneficio para el canal, Ejemplos de uso, Nivel de madurez actual y Próximos pasos/brechas.
- **Matriz de Madurez Visual:** Tablero comparativo del estado de cada capacidad en la plataforma.
- **Arquitectura Web:** Aplicación web estática ligera (HTML5 semántico, CSS moderno estructurado y Vanilla JS sin dependencias complejas), con diseño moderno, intuitivo y responsivo.

## Brand Commitments

- **Identidad de Plataforma:** Galatea (Plataforma de Capacidades Mobile).
- **Nombre de la Aplicación / Portal:** Hilo Conductor (el hilo que articula y conecta todas las capacidades mobile).
- **Confidencialidad:** Prohibición estricta de mencionar entidades o marcas financieras específicas; uso exclusivo de terminología general corporativa y de ingeniería de software.
- **Tono y Voz:** Claro, empoderador, técnico pero accesible, estructurado y enfocado en la experiencia del desarrollador y del canal.
- **Idioma principal:** Español.

## Evidence on Hand

- Documento maestro de arquitectura y catálogo de capacidades: *"Galatea como plataforma de capacidades mobile - Catálogo de Capacidades y Hilo Conductor"*, con 17 capacidades clasificadas, matriz de madurez de 6 niveles (0 a 5), priorización estratégica y ciclo de vida de desarrollo.

## Product Principles

- **"Hacer canal, no rehacer la rueda":** Partir de una base común para que los canales se concentren en resolver necesidades de negocio y no en capacidades transversales.
- **El Hilo Conductor como guía:** La experiencia de navegación debe orientar al desarrollador según el momento del ciclo de vida en que se encuentra su proyecto.
- **Transparencia en el estado:** Diferenciar nítidamente qué capacidades están disponibles hoy (Niveles 3 y 4) de las que están en construcción o conceptualización (Niveles 1 y 2).
- **Enfoque en la acción:** Cada ficha de capacidad debe orientar rápidamente sobre qué problema resuelve y cómo consumirla.
- **Ligereza, estética premium y velocidad:** Experiencia fluida, accesible, con diseño de alto nivel y cero fricción técnica.

## Accessibility & Inclusion

- Cumplimiento de WCAG AA en contraste y legibilidad.
- Soporte total para navegación mediante teclado y lectores de pantalla.
- Diseño totalmente adaptable (responsive) para desktop, tablet y mobile.
