/**
 * Galatea - Hilo Conductor | Apple Design Language Architecture
 * Minimalist Capabilities Catalog, Maturity Matrix & Lifecycle Stepper
 */

(function () {
  'use strict';

  // --- 1. Master Data: Strategic Blocks & Lifecycle Stages ---
  const LIFECYCLE_STAGES = [
    { id: 1, name: 'Idear y Diseñar', desc: 'Figma, Design System, Widgets' },
    { id: 2, name: 'Construir', desc: 'Mobile Starter Kit, API Client' },
    { id: 3, name: 'Migrar y Modernizar', desc: 'MCP, IA DevEx, Refactor' },
    { id: 4, name: 'Configurar y Gobernar', desc: 'Feature Flags, Config Remota' },
    { id: 5, name: 'Componer Experiencias', desc: 'BDUI, Motor Flujos, Miniapps' },
    { id: 6, name: 'Probar y Liberar', desc: 'A/B Testing, Despliegue Seguro' },
    { id: 7, name: 'Operar y Observar', desc: 'Observabilidad 360, Telemetría' },
    { id: 8, name: 'Evolucionar y Optimizar', desc: 'Analítica, Mejora Continua' }
  ];

  const STRATEGIC_BLOCKS = [
    { id: 'all', name: 'Todos' },
    { id: 'visual', name: 'Experiencia Visual' },
    { id: 'base', name: 'Base Técnica' },
    { id: 'modular', name: 'Construcción Modular' },
    { id: 'gobierno', name: 'Gobierno y Control' },
    { id: 'observabilidad', name: 'Observabilidad' },
    { id: 'devex', name: 'DevEx & IA' },
    { id: 'ecosistemas', name: 'Ecosistemas' }
  ];

  const MATURITY_LEVELS = [
    { level: 0, name: 'Idea o Necesidad', criteria: 'Existe la oportunidad, sin definición formal de alcance ni dueño.' },
    { level: 1, name: 'Conceptualizada', criteria: 'Entendimiento del problema e hipótesis inicial, pendiente validación.' },
    { level: 2, name: 'En construcción', criteria: 'En desarrollo activo, ajuste o validación técnica en plataforma.' },
    { level: 3, name: 'Disponible', criteria: 'Lista para adopción por canales; en formalización de documentación.' },
    { level: 4, name: 'Estandarizada', criteria: 'Cuenta con lineamientos oficiales, documentación completa y gobierno.' },
    { level: 5, name: 'Gestionada y Escalada', criteria: 'Adopción consolidada, métricas de impacto y mejora continua.' }
  ];

  // --- 2. Master Capabilities Catalog (20 Capacities from PDF) ---
  const CAPABILITIES = [
    {
      id: 'cap-1',
      number: 1,
      title: 'Sistema de Diseño (Design System)',
      blockId: 'visual',
      blockName: 'Experiencia Visual',
      maturityLevel: 4,
      maturityLabel: 'Estandarizada',
      priority: 'Alta',
      isTopPriority: false,
      summary: 'Estándares visuales y componentes reutilizables para construir experiencias móviles homogéneas y accesibles.',
      offers: [
        'Guías de experiencia UX/UI',
        'Tokens de diseño (color, tipografía, espaciado)',
        'Componentes visuales universales',
        'Patrones estandarizados de navegación',
        'Accesibilidad universal (WCAG AA)',
        'Soporte nativo para modo oscuro'
      ],
      benefit: 'Los canales no diseñan desde cero; todas las aplicaciones mantienen la misma consistencia de marca.',
      examples: 'Botones de acción, cards informativas de resumen, campos de formulario con validación visual.',
      codeSnippet: `// Uso de Tokens del Sistema de Diseño Galatea
import { GalateaButton, GalateaCard, useThemeTokens } from '@galatea/design-system';

export const AccountOverview = () => {
  const { colors, spacing } = useThemeTokens();
  return (
    <GalateaCard elevation="subtle" padding={spacing.md}>
      <GalateaButton variant="primary" size="large">
        Continuar Operación
      </GalateaButton>
    </GalateaCard>
  );
};`,
      gaps: 'Portal donde exponer el catálogo consolidado de widgets y definición de modularidad desde el desarrollo.',
      lifecycleStages: [1, 3]
    },
    {
      id: 'cap-2',
      number: 2,
      title: 'Catálogo de Widgets Especializados',
      blockId: 'visual',
      blockName: 'Experiencia Visual',
      maturityLevel: 3,
      maturityLabel: 'Disponible',
      priority: 'Alta',
      isTopPriority: false,
      summary: 'Biblioteca de componentes visuales avanzados especializados en casos de uso y flujos del negocio.',
      offers: [
        'Detalle visual e interactivo de productos',
        'Flujos guiados de vinculación digital',
        'Listado dinámico y categorizado de productos',
        'Módulo de validación de segundo factor (2FA / OTP)'
      ],
      benefit: 'Reutilización inmediata de componentes financieros y funcionales probados y auditados.',
      examples: 'Widget para visualizar saldos y movimientos, módulo de autenticación con token de seguridad.',
      codeSnippet: `// Integración del Widget Especializado de Segundo Factor
import { SecondFactorWidget } from '@galatea/specialized-widgets';

<SecondFactorWidget
  method="push_notification"
  onVerificationSuccess={(token) => handleAuthorizedAction(token)}
  onRetry={() => promptSmsFallback()}
/>`,
      gaps: 'Crear o consolidar portal para exponer widgets, ejemplos en vivo, guías y criterios de reutilización.',
      lifecycleStages: [1, 3]
    },
    {
      id: 'cap-3',
      number: 3,
      title: 'Mobile Starter Kit (App Base)',
      blockId: 'base',
      blockName: 'Base Técnica',
      maturityLevel: 3,
      maturityLabel: 'Disponible',
      priority: 'Media-Baja',
      isTopPriority: false,
      summary: 'Plantilla de arquitectura preconfigurada para inicializar cualquier aplicación móvil de canal en horas.',
      offers: [
        'Arquitectura base limpia y modular',
        'Enrutamiento y sistema de navegación',
        'Manejo robusto de sesión y credenciales',
        'Captura y gestión centralizada de errores',
        'Logging estructurado y telemetría inicial',
        'Configuración remota conectada y seguridad base'
      ],
      benefit: 'En lugar de invertir semanas creando infraestructura técnica, los equipos arrancan con una base sólida.',
      examples: 'De una idea de negocio a una app móvil lista para agregar flujos comerciales.',
      codeSnippet: `// Inicialización con Mobile Starter Kit
$ npx @galatea/create-mobile-app my-channel-app --template standard
> Aplicando arquitectura modular...
> Vinculando sistema de sesión, logging y navegación...
> Configuración de seguridad verificada.
Listo para agregar experiencias de negocio.`,
      gaps: 'Definir criterios de aceptación formales, alcance mínimo y ruta de adopción para nuevos canales.',
      lifecycleStages: [2]
    },
    {
      id: 'cap-4',
      number: 4,
      title: 'Plugins como Capacidades (SDK)',
      blockId: 'base',
      blockName: 'Base Técnica',
      maturityLevel: 2,
      maturityLabel: 'En construcción',
      priority: 'Media',
      isTopPriority: false,
      summary: 'Catálogo de plugins nativos gobernados que encapsulan hardware y capacidades comunes del dispositivo.',
      offers: [
        'Cámara y captura fotográfica asistida',
        'Biometría nativa (TouchID, FaceID, Huella)',
        'Escáner y decodificador de códigos QR',
        'Geolocalización y geocercas seguras',
        'Compartición segura de documentos y archivos',
        'Gestión de Deep Links y Universal Links',
        'Recepción y gestión de Notificaciones Push'
      ],
      benefit: 'Evita que cada equipo implemente capacidades de dispositivo de maneras dispares, centralizando estándares.',
      examples: 'Autenticación biométrica unificada o lectura de códigos QR para transferencias.',
      codeSnippet: `// Consumo de Plugin de Biometría Gobernado
import { BiometricsPlugin } from '@galatea/plugins';

const auth = await BiometricsPlugin.authenticate({
  reason: 'Confirma tu identidad para continuar',
  fallbackToPin: true
});

if (auth.success) {
  proceed();
}`,
      gaps: 'Terminar construcción del SDK gobernado y habilitar el portal para exponer el catálogo de plugins.',
      lifecycleStages: [2, 4]
    },
    {
      id: 'cap-5',
      number: 5,
      title: 'Backend Driven UI (BDUI)',
      blockId: 'modular',
      blockName: 'Construcción Modular',
      maturityLevel: 2,
      maturityLabel: 'En construcción',
      priority: 'Alta',
      isTopPriority: true,
      summary: 'Modelo donde la aplicación recibe desde backend la definición declarativa de pantallas y componentes a mostrar.',
      offers: [
        'Configuración dinámica de vistas y pantallas',
        'Personalización de la interfaz en tiempo real por segmento',
        'Activación inmediata de campañas y banners promocionales',
        'Actualización de flujos sin publicar una nueva versión en tiendas'
      ],
      benefit: 'Mayor velocidad para los canales y total independencia respecto a aprobaciones en tiendas de aplicaciones.',
      examples: 'Un banner promocional o una nueva sección en el home desplegada desde el backend en minutos.',
      codeSnippet: `// Esquema JSON recibido por la app para renderizado declarativo
{
  "type": "banner",
  "style": "promotional",
  "title": "Solicita tu crédito digital",
  "description": "Aprobación instantánea con tasa preferencial",
  "action": {
    "type": "navigate",
    "route": "credit_request_flow"
  }
}`,
      gaps: 'Terminar estructuración backend, definir modelo de gobierno, guía de uso y validación del primer canal.',
      lifecycleStages: [5, 4]
    },
    {
      id: 'cap-6',
      number: 6,
      title: 'Motor de Flujos, Miniapps y Pantallas (Low Code)',
      blockId: 'modular',
      blockName: 'Construcción Modular',
      maturityLevel: 2,
      maturityLabel: 'En construcción',
      priority: 'Alta',
      isTopPriority: true,
      summary: 'Motor para construir y parametrizar flujos de negocio completos y reutilizables entre múltiples canales.',
      offers: [
        'Flujos de negocio completamente parametrizados',
        'Navegación configurable mediante grafos de estados',
        'Validaciones centralizadas en el motor de flujos',
        'Reutilización modular de journeys entre diferentes canales'
      ],
      benefit: 'Los canales construyen procesos integrales reutilizando journeys en lugar de programar pantalla por pantalla.',
      examples: 'Flujo de Solicitud de Crédito: Paso 1 (Productos) → Paso 2 (Datos) → Paso 3 (Términos) → Paso 4 (Verificación) → Paso 5 (Comprobante).',
      codeSnippet: `// Definición de Journey Reutilizable
const creditFlow = {
  journeyId: "credit-request-v2",
  steps: [
    { id: "step-1", screen: "ProductSelector", next: "step-2" },
    { id: "step-2", screen: "FinancialProfileForm", next: "step-3" },
    { id: "step-3", screen: "TermsAgreement", next: "step-4" },
    { id: "step-4", screen: "BiometricVerification", next: "step-5" },
    { id: "step-5", screen: "ReceiptVoucher", isFinal: true }
  ]
};`,
      gaps: 'Aterrizar el modelo de adopción y coordinar la evolución con plataformas de desarrollo visual.',
      lifecycleStages: [5]
    },
    {
      id: 'cap-7',
      number: 7,
      title: 'Feature Flags y Experimentación',
      blockId: 'gobierno',
      blockName: 'Gobierno y Control',
      maturityLevel: 3,
      maturityLabel: 'Disponible',
      priority: 'Media',
      isTopPriority: false,
      summary: 'Plataforma para habilitar, desactivar y experimentar con funcionalidades de forma gradual y controlada.',
      offers: [
        'Activación granular por usuario o lista de prueba',
        'Activación porcentual o segmentada (rollout progresivo)',
        'Ejecución de pruebas A/B con telemetría de conversión',
        'Apagado rápido (Kill-Switch) ante anomalías o incidentes'
      ],
      benefit: 'Reducción drástica del riesgo operacional al liberar nuevas experiencias en producción.',
      examples: 'Probar un nuevo diseño de transferencias con el 5% de los usuarios antes de la liberación masiva.',
      codeSnippet: `// Evaluación de Feature Flag en tiempo de ejecución
if (await GalateaFlags.isEnabled('new_transfer_flow_v2', { userId: user.id })) {
  renderNewTransferExperience();
} else {
  renderLegacyTransferExperience();
}`,
      gaps: 'Profundizar la articulación de feature flags con el resto de capacidades nativas de la plataforma.',
      lifecycleStages: [4, 6]
    },
    {
      id: 'cap-8',
      number: 8,
      title: 'Servicios de Analítica Centralizada',
      blockId: 'observabilidad',
      blockName: 'Observabilidad',
      maturityLevel: 3,
      maturityLabel: 'Disponible',
      priority: 'Media',
      isTopPriority: false,
      summary: 'Servicio centralizado de analítica de interacción y embudos de conversión para aplicaciones móviles.',
      offers: [
        'Dashboards unificados para vista 360 del usuario',
        'Comportamiento técnico de la app (crashes, performance)',
        'Métricas de interacción y navegación en tiempo real',
        'Seguimiento detallado de funnels de conversión y abandono'
      ],
      benefit: 'Todos los canales miden el desempeño de sus journeys bajo el mismo estándar de métricas.',
      examples: 'Conocer el porcentaje de abandono en la última pantalla de un flujo de inversión digital.',
      codeSnippet: `// Registro de Evento de Journey Estandarizado
GalateaAnalytics.trackStep({
  journey: 'digital_investment',
  stepName: 'terms_and_conditions',
  stepNumber: 3,
  completed: true
});`,
      gaps: 'Aterrizar la visión integral combinando analítica de producto con la plataforma 360 del cliente.',
      lifecycleStages: [7, 8]
    },
    {
      id: 'cap-9',
      number: 9,
      title: 'Experiencias Conversacionales y A2UI (Agent to UI)',
      blockId: 'devex',
      blockName: 'DevEx & IA',
      maturityLevel: 1,
      maturityLabel: 'Conceptualizada',
      priority: 'Prioridad 1',
      isTopPriority: true,
      summary: 'Modelo de integración donde las capacidades se exponen como funciones para agentes de IA con interfaz reactiva.',
      offers: [
        'Consumo uniforme de servicios vía function calling',
        'Integración nativa con agentes inteligentes y modelos de lenguaje',
        'Orquestación dinámica de capacidades en lenguaje natural',
        'Generación reactiva de componentes UI acordes a la conversación (A2UI)'
      ],
      benefit: 'Los canales integran asistentes inteligentes consumiendo capacidades sin preocuparse por implementaciones internas.',
      examples: 'El usuario solicita consultar saldo en chat y el agente invoca consultar_saldo renderizando la tarjeta correspondiente.',
      codeSnippet: `// Definición de Función de Negocio para el Agente (Tool Call)
{
  "function": "consultar_saldo",
  "description": "Consulta el saldo disponible de una cuenta",
  "parameters": {
    "type": "object",
    "properties": {
      "cuentaId": { "type": "string", "description": "Identificador de la cuenta" }
    },
    "required": ["cuentaId"]
  }
}`,
      gaps: 'Aterrizar la arquitectura de referencia y construir los primeros prototipos de A2UI gobernados.',
      lifecycleStages: [5, 3]
    },
    {
      id: 'cap-10',
      number: 10,
      title: 'Configuración Remota (Remote Config)',
      blockId: 'gobierno',
      blockName: 'Gobierno y Control',
      maturityLevel: 3,
      maturityLabel: 'Disponible',
      priority: 'Media',
      isTopPriority: false,
      summary: 'Administración dinámica del comportamiento y variables operativas sin requerir despliegue de código.',
      offers: [
        'Gestión en caliente de URLs y endpoints de servicios',
        'Parámetros técnicos como timeouts y políticas de reintento',
        'Montos y topes operativos de negocio configurables al instante'
      ],
      benefit: 'Ajustes operativos y cambios de negocio urgentes aplicados en producción en minutos.',
      examples: 'Ajustar el valor máximo de transferencia durante un fin de semana o modificar el endpoint de un servicio.',
      codeSnippet: `// Lectura de parámetro remoto con fallback seguro
const maxLimit = await GalateaRemoteConfig.getNumber(
  'max_transfer_daily_limit',
  { fallback: 5000000 }
);`,
      gaps: 'Apalancarse en componentes backend y migrar capacidades con información en JSON a configuración remota.',
      lifecycleStages: [4]
    },
    {
      id: 'cap-11',
      number: 11,
      title: 'Multilenguaje y Regionalización',
      blockId: 'visual',
      blockName: 'Experiencia Visual',
      maturityLevel: 3,
      maturityLabel: 'Disponible',
      priority: 'Media',
      isTopPriority: false,
      summary: 'Soporte para múltiples idiomas y configuraciones regionales sin modificar el código fuente de la app.',
      offers: [
        'Traducción dinámica y contextual de textos',
        'Formateo automático de monedas y divisas locales',
        'Formateo numérico y de fechas según la región',
        'Configuración regional heredada del dispositivo o gobernada remotamente'
      ],
      benefit: 'Si la organización o una filial requiere operar en otro idioma o país, la aplicación ya está preparada.',
      examples: 'Adaptación automática de símbolos de moneda ($ vs USD) y textos según la configuración regional.',
      codeSnippet: `// Localización declarativa de textos y formatos
import { useLocalization } from '@galatea/localization';

const { t, formatCurrency } = useLocalization();
return <span>{t('balance.title')}: {formatCurrency(amount)}</span>;`,
      gaps: 'Evaluar la extracción de archivos de configuración multilenguaje fuera del paquete de frontend.',
      lifecycleStages: [1, 4]
    },
    {
      id: 'cap-12',
      number: 12,
      title: 'Plataforma de Observabilidad del Cliente',
      blockId: 'observabilidad',
      blockName: 'Observabilidad',
      maturityLevel: 3,
      maturityLabel: 'Disponible',
      priority: 'Media',
      isTopPriority: false,
      summary: 'Telemetría integral de aplicaciones y canales para monitoreo de salud operacional técnica en tiempo real.',
      offers: [
        'Crash reporting en tiempo real con stack trace enriquecido',
        'Métricas de rendimiento de red y tiempos de respuesta',
        'Trazabilidad distribuida extremo a extremo de transacciones',
        'Sistema de alertamiento temprano ante degradaciones operacionales'
      ],
      benefit: 'Detectar y mitigar problemas técnicos antes de que impacten la experiencia de los clientes.',
      examples: 'Alertas automáticas en caso de incremento de errores 500 en el flujo de inicio de sesión.',
      codeSnippet: `// Reporte de telemetría y error contextualizado
GalateaObservability.recordError(error, {
  screen: 'CreditCheckout',
  network: '4G',
  action: 'submit'
});`,
      gaps: 'Integrar completamente los módulos de telemetría de tiendas, taggeo y servicios core.',
      lifecycleStages: [7, 8]
    },
    {
      id: 'cap-14',
      number: 14,
      title: 'Motor de Formularios Dinámicos',
      blockId: 'modular',
      blockName: 'Construcción Modular',
      maturityLevel: 2,
      maturityLabel: 'En construcción',
      priority: 'Media',
      isTopPriority: false,
      summary: 'Motor para diseñar, desplegar y validar formularios dinámicos y dependientes sin escribir código frontend.',
      offers: [
        'Formularios completamente configurables por esquema JSON',
        'Motor de validaciones en tiempo real',
        'Dependencias y visibilidad condicional entre campos',
        'Reglas de obligatoriedad según perfil o respuestas previas'
      ],
      benefit: 'Elimina el desarrollo y mantenimiento repetitivo de pantallas de captura de datos en todos los canales.',
      examples: 'Formularios de atención de reclamos, encuestas de satisfacción o actualización de datos.',
      codeSnippet: `// Definición de Formulario Dinámico por Esquema
{
  "formId": "customer_update",
  "fields": [
    { "name": "income", "type": "currency", "required": true },
    { 
      "name": "tax_id", 
      "type": "text", 
      "visibleIf": { "field": "income", "greaterThan": 5000000 } 
    }
  ]
}`,
      gaps: 'Aterrizar requerimientos con equipos de producto y formalizar el motor de renderizado.',
      lifecycleStages: [5]
    },
    {
      id: 'cap-15',
      number: 15,
      title: 'API Consumption Framework (BaseApiClient)',
      blockId: 'base',
      blockName: 'Base Técnica',
      maturityLevel: 3,
      maturityLabel: 'Disponible',
      priority: 'Media',
      isTopPriority: false,
      summary: 'Framework estandarizado y resiliente para el consumo de servicios backend y microservicios.',
      offers: [
        'Capa de Networking optimizada con tipado seguro',
        'Políticas inteligentes de reintento automático (Retry)',
        'Patrón Circuit Breaker para protección ante fallos',
        'Manejo de caché local con políticas de invalidación',
        'Observabilidad e inyección de headers de trazabilidad'
      ],
      benefit: 'Elimina implementaciones duplicadas de red y estandariza la resiliencia y seguridad en cada petición.',
      examples: 'Consumir endpoints con retry exponencial automático y telemetría transparente.',
      codeSnippet: `// Consumo de servicio con BaseApiClient
const client = new BaseApiClient({ baseUrl: 'https://api.internal/v1' });

const accounts = await client.get('/accounts', {
  cache: 'network-first',
  retryPolicy: { maxAttempts: 3, backoff: 'exponential' }
});`,
      gaps: 'Definir forma estandarizada y gobernada de los contratos con el backend corporativo.',
      lifecycleStages: [2]
    },
    {
      id: 'cap-16',
      number: 16,
      title: 'IA en Developer Experience (DevEx) & MCP',
      blockId: 'devex',
      blockName: 'DevEx & IA',
      maturityLevel: 1,
      maturityLabel: 'Conceptualizada',
      priority: 'Prioridad 2',
      isTopPriority: true,
      summary: 'Herramientas de IA y servidores Model Context Protocol para elevar la productividad de los desarrolladores.',
      offers: [
        'Asistentes de IA contextualizados en la plataforma',
        'Servidores MCP para automatizar migraciones y modernización',
        'Validación automatizada de estándares y arquitecturas',
        'Refactorización asistida y generación guiada de código'
      ],
      benefit: 'Reduce las curvas de aprendizaje y asiste a los ingenieros en el cumplimiento de estándares sin fricción.',
      examples: 'Servidor MCP que guía a un desarrollador en la migración de un módulo legacy hacia el Starter Kit.',
      codeSnippet: `// Configuración de Servidor MCP Galatea
{
  "mcpServers": {
    "galatea-assistant": {
      "command": "galatea-mcp",
      "args": ["--validate-architecture", "--enforce-tokens"]
    }
  }
}`,
      gaps: 'Capacidad centralizada donde se expongan todas las herramientas de IA para desarrollo.',
      lifecycleStages: [3]
    },
    {
      id: 'cap-17',
      number: 17,
      title: 'App Manager',
      blockId: 'gobierno',
      blockName: 'Gobierno y Control',
      maturityLevel: 2,
      maturityLabel: 'En evolución',
      priority: 'Media',
      isTopPriority: false,
      summary: 'Consola centralizada para la administración de versiones, parametrización y ciclo de vida de aplicaciones.',
      offers: [
        'Administración centralizada del ciclo de vida de apps',
        'Control de versiones mínimas soportadas y forzado de actualización',
        'Gestión de variables operativas y perfiles por entorno',
        'Panel de gobierno del ecosistema de canales móviles'
      ],
      benefit: 'Control operativo integral y gobierno de múltiples aplicaciones desde un único punto de administración.',
      examples: 'Configurar el apagado de una versión obsoleta de la app móvil con mensaje guiado hacia la tienda.',
      codeSnippet: `// Política de Versiones en App Manager
{
  "appId": "mobile-channel-retail",
  "minSupportedVersion": "4.12.0",
  "forceUpdate": true,
  "upgradeUrl": "https://store.domain/download"
}`,
      gaps: 'Apalancamiento de componentes backend y formalización de la consola web de administración.',
      lifecycleStages: [4, 6]
    },
    {
      id: 'cap-18',
      number: 18,
      title: 'API-first y Contratos Reutilizables',
      blockId: 'ecosistemas',
      blockName: 'Ecosistemas',
      maturityLevel: 2,
      maturityLabel: 'En construcción',
      priority: 'Media',
      isTopPriority: false,
      summary: 'Diseño de contratos formales antes de la experiencia, habilitando reutilización y consumo estándar.',
      offers: [
        'Diseño de contratos OpenAPI / Swagger previos a la UI',
        'Versionamiento semántico estricto de APIs',
        'Componentes y DTOs reutilizables entre múltiples canales',
        'Mocks automáticos para desarrollo desacoplado'
      ],
      benefit: 'Desacopla los equipos de canal de los equipos de backend, permitiendo entregas paralelas y predecibles.',
      examples: 'Contrato estándar para consulta de movimientos consumible por móvil, web y quioscos.',
      codeSnippet: `// Contrato API-First (OpenAPI 3.1)
paths:
  /v1/accounts/{id}/balance:
    get:
      summary: Consulta de saldo disponible
      responses:
        '200':
          description: Saldo consultado con éxito`,
      gaps: 'Documentar el enfoque API-first formal, versionamiento y catálogo corporativo de contratos.',
      lifecycleStages: [2, 3]
    },
    {
      id: 'cap-19',
      number: 19,
      title: 'Open Banking Readiness Mobile',
      blockId: 'ecosistemas',
      blockName: 'Ecosistemas',
      maturityLevel: 1,
      maturityLabel: 'Conceptualizada',
      priority: 'Media',
      isTopPriority: false,
      summary: 'Preparación de la arquitectura móvil para flujos seguros de agregación financiera y ecosistemas abiertos.',
      offers: [
        'Experiencias guiadas de consentimiento informado del usuario',
        'Interacción segura con terceros autorizados',
        'Gestión y revocación granular de permisos de datos',
        'Mecanismos avanzados de confianza digital'
      ],
      benefit: 'Posiciona a la organización a la vanguardia de las finanzas abiertas con seguridad integral.',
      examples: 'Consentimiento para que un tercero lea movimientos con autorización explícita y revocable.',
      codeSnippet: `// Flujo de Consentimiento Open Banking
const consent = await OpenBankingModule.requestConsent({
  scope: ['accounts:read'],
  thirdParty: 'FintechPartner',
  validUntilDays: 90
});`,
      gaps: 'Definir el rol de la plataforma mobile en consentimiento, agregación y revocación.',
      lifecycleStages: [1, 4]
    },
    {
      id: 'cap-20',
      number: 20,
      title: 'Embedded Finance Readiness',
      blockId: 'ecosistemas',
      blockName: 'Ecosistemas',
      maturityLevel: 1,
      maturityLabel: 'Conceptualizada',
      priority: 'Media',
      isTopPriority: false,
      summary: 'Desacoplamiento de capacidades de canal para ser embebidas en aplicaciones de terceros y aliados.',
      offers: [
        'Módulos embebibles de autenticación y biometría',
        'Pasarelas y cobros QR integrables vía SDK liviano',
        'Generación de comprobantes transaccionales certificados',
        'SDKs de Onboarding gobernados para aliados'
      ],
      benefit: 'Multiplica los canales de adquisición ofreciendo servicios en el momento exacto de necesidad del usuario.',
      examples: 'Embeber el botón de pago y comprobante dentro de una app de comercio electrónico aliada.',
      codeSnippet: `// SDK Embebible para Aliados
import { GalateaEmbeddedPay } from '@galatea/embedded-finance';

GalateaEmbeddedPay.startPayment({
  merchantId: 'MERCHANT_001',
  amount: 150000,
  onComplete: (receipt) => showConfirmation(receipt)
});`,
      gaps: 'Identificar capacidades candidatas a desacoplar y definir el modelo de distribución de SDKs.',
      lifecycleStages: [1, 5]
    }
  ];

  // --- 3. State Management ---
  let matrixDragMoved = false;

  const state = {
    selectedBlock: 'all',
    selectedMaturity: 'all',
    selectedLifecycleStage: null,
    searchQuery: '',
    viewMode: 'grid',
    selectedCapability: null
  };

  // --- 4. Element References ---
  const elements = {
    capabilitiesGrid: document.getElementById('capabilitiesGrid'),
    matrixContainer: document.getElementById('matrixContainer'),
    matrixGrid: document.getElementById('matrixGrid'),
    searchInput: document.getElementById('searchInput'),
    searchCount: document.getElementById('searchCount'),
    blockFilterPills: document.getElementById('blockFilterPills'),
    maturityFilterPills: document.getElementById('maturityFilterPills'),
    stepperTrack: document.getElementById('stepperTrack'),
    stepperFeedback: document.getElementById('stepperFeedback'),
    stepperStageName: document.getElementById('stepperStageName'),
    btnClearStage: document.getElementById('btnClearStage'),
    segmentedBtns: document.querySelectorAll('.segmented-btn'),
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    totalCapsCount: document.getElementById('totalCapsCount'),
    activeCapsCount: document.getElementById('activeCapsCount'),
    detailModal: document.getElementById('detailModal'),
    btnCloseModal: document.getElementById('btnCloseModal'),
    modalOverlayClose: document.getElementById('modalOverlayClose'),
    priorityCards: document.querySelectorAll('.priority-card')
  };

  // --- 5. Filtering Logic ---
  function filterCapabilities() {
    return CAPABILITIES.filter((cap) => {
      // 1. Search Query
      if (state.searchQuery.trim() !== '') {
        const q = state.searchQuery.toLowerCase().trim();
        const matches =
          cap.title.toLowerCase().includes(q) ||
          cap.summary.toLowerCase().includes(q) ||
          cap.benefit.toLowerCase().includes(q) ||
          cap.examples.toLowerCase().includes(q) ||
          cap.offers.some((o) => o.toLowerCase().includes(q));
        if (!matches) return false;
      }

      // 2. Block Filter
      if (state.selectedBlock !== 'all' && cap.blockId !== state.selectedBlock) {
        return false;
      }

      // 3. Maturity Filter
      if (state.selectedMaturity !== 'all' && cap.maturityLevel !== parseInt(state.selectedMaturity, 10)) {
        return false;
      }

      // 4. Lifecycle Stage Filter
      if (state.selectedLifecycleStage !== null) {
        if (!cap.lifecycleStages.includes(state.selectedLifecycleStage)) {
          return false;
        }
      }

      return true;
    });
  }

  // --- 6. Render Functions ---

  // Lifecycle Stepper (Rail)
  function renderStepper() {
    elements.stepperTrack.innerHTML = '';
    LIFECYCLE_STAGES.forEach((stage) => {
      const item = document.createElement('div');
      item.className = `stepper-item ${state.selectedLifecycleStage === stage.id ? 'active' : ''}`;
      item.dataset.stageId = stage.id;
      item.innerHTML = `
        <div class="stepper-dot">${stage.id}</div>
        <div class="stepper-name">${stage.name}</div>
        <div class="stepper-sub">${stage.desc}</div>
      `;
      item.addEventListener('click', () => {
        if (state.selectedLifecycleStage === stage.id) {
          state.selectedLifecycleStage = null;
        } else {
          state.selectedLifecycleStage = stage.id;
        }
        updateUI();
      });
      elements.stepperTrack.appendChild(item);
    });

    if (state.selectedLifecycleStage !== null) {
      const stageObj = LIFECYCLE_STAGES.find((s) => s.id === state.selectedLifecycleStage);
      elements.stepperFeedback.style.display = 'flex';
      elements.stepperStageName.textContent = `Etapa ${stageObj.id}: ${stageObj.name}`;
    } else {
      elements.stepperFeedback.style.display = 'none';
    }
  }

  // Capabilities Grid View (Apple Cards)
  function renderGrid(filteredCaps) {
    elements.capabilitiesGrid.innerHTML = '';

    if (filteredCaps.length === 0) {
      elements.capabilitiesGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
          <h3 style="font-size: 1.2rem; font-weight: 600; margin-bottom: 0.5rem;">No se encontraron capacidades</h3>
          <p style="color: var(--apple-text-secondary); margin-bottom: 1.25rem;">Prueba con otros términos de búsqueda o restablece los filtros.</p>
          <button class="btn-apple-primary" id="btnResetFilters">Restablecer filtros</button>
        </div>
      `;
      const btnReset = document.getElementById('btnResetFilters');
      if (btnReset) btnReset.addEventListener('click', resetAllFilters);
      return;
    }

    filteredCaps.forEach((cap) => {
      const card = document.createElement('div');
      card.className = 'cap-card';
      card.dataset.id = cap.id;

      const topChips = cap.offers.slice(0, 3).map((o) => `<span class="mini-chip">${o}</span>`).join('');
      const moreCount = cap.offers.length > 3 ? `<span class="mini-chip">+${cap.offers.length - 3}</span>` : '';

      card.innerHTML = `
        <div class="card-header-line">
          <span class="category-tag">${cap.blockName}</span>
          <span class="maturity-indicator">
            <span class="indicator-dot" style="background-color: var(--mat-${cap.maturityLevel});"></span>
            Nivel ${cap.maturityLevel}: ${cap.maturityLabel}
          </span>
        </div>
        <h3 class="card-heading">${cap.number}. ${cap.title}</h3>
        <p class="card-summary">${cap.summary}</p>
        <div class="card-chips-cluster">
          ${topChips}
          ${moreCount}
        </div>
        <div class="card-foot">
          <span class="card-benefit-text" title="${cap.benefit}">${cap.benefit}</span>
          <span class="card-action-link">Detalle →</span>
        </div>
      `;

      card.addEventListener('click', () => openDetailModal(cap));
      elements.capabilitiesGrid.appendChild(card);
    });
  }

  // Maturity Matrix Board View (Apple Column Layout)
  function renderMatrix(filteredCaps) {
    elements.matrixGrid.innerHTML = '';

    MATURITY_LEVELS.forEach((levelObj) => {
      const col = document.createElement('div');
      col.className = 'matrix-col';

      const capsInLevel = filteredCaps.filter((c) => c.maturityLevel === levelObj.level);

      col.innerHTML = `
        <div class="matrix-col-top">
          <div class="matrix-level-label" style="color: var(--mat-${levelObj.level});">Nivel ${levelObj.level}</div>
          <div class="matrix-level-title">${levelObj.name} (${capsInLevel.length})</div>
          <div class="matrix-level-desc">${levelObj.criteria}</div>
        </div>
        <div class="matrix-cards-stack">
          ${
            capsInLevel.length === 0
              ? '<div style="font-size:0.76rem; color:var(--apple-text-tertiary); text-align:center; padding:1.5rem 0;">Sin capacidades en este nivel.</div>'
              : capsInLevel
                  .map(
                    (cap) => `
              <div class="matrix-item" data-id="${cap.id}">
                <div class="matrix-item-category">${cap.blockName} • #${cap.number}</div>
                <div class="matrix-item-name">${cap.title}</div>
              </div>
            `
                  )
                  .join('')
          }
        </div>
      `;

      col.querySelectorAll('.matrix-item').forEach((itemEl) => {
        itemEl.addEventListener('click', () => {
          if (matrixDragMoved) return;
          const cap = CAPABILITIES.find((c) => c.id === itemEl.dataset.id);
          if (cap) openDetailModal(cap);
        });
      });

      elements.matrixGrid.appendChild(col);
    });
  }

  // Filter Chips (Apple Style)
  function renderFilterChips() {
    // 1. Blocks
    elements.blockFilterPills.innerHTML = '';
    STRATEGIC_BLOCKS.forEach((b) => {
      const chip = document.createElement('button');
      chip.className = `apple-chip ${state.selectedBlock === b.id ? 'active' : ''}`;
      chip.textContent = b.name;
      chip.addEventListener('click', () => {
        state.selectedBlock = b.id;
        updateUI();
      });
      elements.blockFilterPills.appendChild(chip);
    });

    // 2. Maturity
    elements.maturityFilterPills.innerHTML = '';
    const allMatChip = document.createElement('button');
    allMatChip.className = `apple-chip ${state.selectedMaturity === 'all' ? 'active' : ''}`;
    allMatChip.textContent = 'Todos los Niveles';
    allMatChip.addEventListener('click', () => {
      state.selectedMaturity = 'all';
      updateUI();
    });
    elements.maturityFilterPills.appendChild(allMatChip);

    MATURITY_LEVELS.forEach((m) => {
      const chip = document.createElement('button');
      chip.className = `apple-chip ${state.selectedMaturity === String(m.level) ? 'active' : ''}`;
      chip.innerHTML = `<span style="display:inline-block; width:6px; height:6px; border-radius:50%; background-color:var(--mat-${m.level}); margin-right:5px;"></span>Nivel ${m.level}`;
      chip.addEventListener('click', () => {
        state.selectedMaturity = String(m.level);
        updateUI();
      });
      elements.maturityFilterPills.appendChild(chip);
    });
  }

  // Update State & UI
  function updateUI() {
    renderFilterChips();
    renderStepper();

    const filtered = filterCapabilities();
    elements.searchCount.textContent = `Mostrando ${filtered.length} de ${CAPABILITIES.length} capacidades`;
    elements.activeCapsCount.textContent = `${filtered.length} visibles`;

    if (state.viewMode === 'grid') {
      elements.capabilitiesGrid.style.display = 'grid';
      elements.matrixContainer.classList.remove('active');
      renderGrid(filtered);
    } else {
      elements.capabilitiesGrid.style.display = 'none';
      elements.matrixContainer.classList.add('active');
      renderMatrix(filtered);
    }
  }

  function resetAllFilters() {
    state.selectedBlock = 'all';
    state.selectedMaturity = 'all';
    state.selectedLifecycleStage = null;
    state.searchQuery = '';
    elements.searchInput.value = '';
    updateUI();
  }

  // --- 7. Modal / Sheet Logic ---
  function openDetailModal(cap) {
    state.selectedCapability = cap;

    const checklistHtml = cap.offers
      .map(
        (item) => `
      <div class="sheet-check-item">
        <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
        </svg>
        <span>${item}</span>
      </div>
    `
      )
      .join('');

    const stagesHtml = cap.lifecycleStages
      .map((stId) => {
        const st = LIFECYCLE_STAGES.find((s) => s.id === stId);
        return `<span class="mini-chip" style="background:var(--apple-surface-hover); color:var(--apple-blue); border-color:var(--apple-border-strong);">Etapa ${stId}: ${st ? st.name : ''}</span>`;
      })
      .join(' ');

    elements.detailModal.querySelector('.modal-header-meta').innerHTML = `
      <div class="modal-eyebrow">
        <span>${cap.blockName}</span>
        <span>•</span>
        <span style="display:inline-flex; align-items:center; gap:0.35rem;">
          <span class="indicator-dot" style="background-color: var(--mat-${cap.maturityLevel});"></span>
          Nivel ${cap.maturityLevel}: ${cap.maturityLabel}
        </span>
      </div>
      <h2 class="modal-sheet-title" id="modalTitle">${cap.number}. ${cap.title}</h2>
    `;

    elements.detailModal.querySelector('.modal-sheet-body').innerHTML = `
      <div class="sheet-section">
        <div class="sheet-section-title">Resumen</div>
        <p class="sheet-text">${cap.summary}</p>
      </div>

      <div class="apple-benefit-box">
        <strong style="display:block; margin-bottom:0.25rem; color:var(--apple-text-primary);">Beneficio para el Canal:</strong>
        <p style="color:var(--apple-text-secondary); margin:0;">${cap.benefit}</p>
      </div>

      <div class="sheet-section">
        <div class="sheet-section-title">Qué Ofrece</div>
        <div class="sheet-checklist">
          ${checklistHtml}
        </div>
      </div>

      ${
        cap.codeSnippet
          ? `
        <div class="sheet-section">
          <div class="sheet-section-title">Patrón de Integración / Código</div>
          <pre class="apple-code-box"><code>${escapeHtml(cap.codeSnippet)}</code></pre>
        </div>
      `
          : ''
      }

      <div class="sheet-section">
        <div class="sheet-section-title">Fases en el Hilo Conductor</div>
        <div style="display:flex; gap:0.4rem; flex-wrap:wrap;">
          ${stagesHtml}
        </div>
      </div>

      <div class="apple-gap-box">
        <strong style="display:block; margin-bottom:0.25rem; color:var(--apple-text-primary);">Próximos Pasos & Brecha Técnica:</strong>
        <p style="margin:0;">${cap.gaps}</p>
      </div>
    `;

    elements.detailModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDetailModal() {
    elements.detailModal.classList.remove('open');
    state.selectedCapability = null;
    document.body.style.overflow = '';
  }

  function escapeHtml(string) {
    return String(string)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // --- 8. Event Listeners ---
  function setupEventListeners() {
    // Search
    elements.searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      updateUI();
    });

    // Shortcuts
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        elements.searchInput.focus();
      } else if (e.key === 'Escape') {
        closeDetailModal();
      }
    });

    // Clear stage filter
    elements.btnClearStage.addEventListener('click', () => {
      state.selectedLifecycleStage = null;
      updateUI();
    });

    // Segmented control (Grid vs Matrix)
    elements.segmentedBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        elements.segmentedBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        state.viewMode = btn.dataset.view;
        updateUI();
      });
    });

    // Modal close
    elements.btnCloseModal.addEventListener('click', closeDetailModal);
    elements.modalOverlayClose.addEventListener('click', closeDetailModal);
    elements.detailModal.addEventListener('click', (e) => {
      if (e.target === elements.detailModal) closeDetailModal();
    });

    // Priority cards click
    elements.priorityCards.forEach((card) => {
      card.addEventListener('click', () => {
        const capNum = parseInt(card.dataset.capNumber, 10);
        const cap = CAPABILITIES.find((c) => c.number === capNum);
        if (cap) openDetailModal(cap);
      });
    });

    // Theme Toggle
    elements.themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('galatea_theme', next);
    });

    const savedTheme = localStorage.getItem('galatea_theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }

  // --- 9. Horizontal Mouse Drag-to-Scroll Gesture ---
  function setupMatrixDragScroll() {
    const container = elements.matrixContainer;
    if (!container) return;

    let isDown = false;
    let startX = 0;
    let scrollStart = 0;
    let velX = 0;
    let lastX = 0;
    let momentumID = null;

    container.addEventListener('mousedown', (e) => {
      // Primary left click only
      if (e.button !== 0) return;

      isDown = true;
      matrixDragMoved = false;
      cancelAnimationFrame(momentumID);
      startX = e.pageX - container.offsetLeft;
      scrollStart = container.scrollLeft;
      lastX = e.pageX;
      velX = 0;
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDown) return;

      const x = e.pageX - container.offsetLeft;
      const walk = x - startX;

      if (Math.abs(walk) > 5) {
        matrixDragMoved = true;
        container.classList.add('is-dragging');
      }

      if (matrixDragMoved) {
        e.preventDefault();
        container.scrollLeft = scrollStart - walk;
        velX = e.pageX - lastX;
        lastX = e.pageX;
      }
    });

    const stopDragging = () => {
      if (!isDown) return;
      isDown = false;
      container.classList.remove('is-dragging');

      if (matrixDragMoved && Math.abs(velX) > 1) {
        applyMomentum();
      }

      // Allow click event listeners to verify matrixDragMoved before resetting
      setTimeout(() => {
        matrixDragMoved = false;
      }, 80);
    };

    window.addEventListener('mouseup', stopDragging);
    window.addEventListener('mouseleave', stopDragging);

    function applyMomentum() {
      cancelAnimationFrame(momentumID);
      velX *= 0.92;
      container.scrollLeft -= velX;
      if (Math.abs(velX) > 0.5) {
        momentumID = requestAnimationFrame(applyMomentum);
      }
    }

    // Convert mouse wheel into smooth horizontal scroll over matrix
    container.addEventListener(
      'wheel',
      (e) => {
        if (e.deltaY !== 0 && !e.shiftKey) {
          if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
            e.preventDefault();
            container.scrollLeft += e.deltaY;
          }
        }
      },
      { passive: false }
    );
  }

  // --- 10. Kinetic Thread Wave Canvas ("El Hilo Conductor") ---
  function initAmbientCanvas() {
    const canvas = document.getElementById('ambientCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    let step = 0;
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function renderWaves() {
      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
      step += 0.008;

      // Draw 3 luminous overlapping waves representing the Hilo Conductor
      const waveConfigs = [
        {
          color: isDark ? 'rgba(41, 151, 255, 0.45)' : 'rgba(0, 113, 227, 0.25)',
          amplitude: 55,
          frequency: 0.0018,
          speed: 1,
          baseY: height * 0.35,
          lineWidth: 2.5
        },
        {
          color: isDark ? 'rgba(191, 90, 242, 0.38)' : 'rgba(175, 82, 222, 0.22)',
          amplitude: 70,
          frequency: 0.0014,
          speed: 0.8,
          baseY: height * 0.55,
          lineWidth: 3
        },
        {
          color: isDark ? 'rgba(100, 210, 255, 0.35)' : 'rgba(0, 199, 190, 0.2)',
          amplitude: 45,
          frequency: 0.0022,
          speed: 1.2,
          baseY: height * 0.72,
          lineWidth: 2
        }
      ];

      waveConfigs.forEach((cfg) => {
        ctx.beginPath();
        ctx.lineWidth = cfg.lineWidth;
        ctx.strokeStyle = cfg.color;
        ctx.shadowBlur = isDark ? 25 : 12;
        ctx.shadowColor = cfg.color;

        for (let x = 0; x <= width; x += 6) {
          const y =
            cfg.baseY +
            Math.sin(x * cfg.frequency + step * cfg.speed) * cfg.amplitude +
            Math.cos(x * cfg.frequency * 0.5 + step * 0.5) * 20;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      });

      if (!isReducedMotion) {
        requestAnimationFrame(renderWaves);
      }
    }

    renderWaves();
  }

  // --- 11. Init ---
  function init() {
    elements.totalCapsCount.textContent = `${CAPABILITIES.length} capacidades`;
    setupEventListeners();
    setupMatrixDragScroll();
    updateUI();
    initAmbientCanvas();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
