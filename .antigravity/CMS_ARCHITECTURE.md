# CMS Data Contracts & Abstraction Layer

All frontend components MUST consume data through abstract helper functions in `src/lib/api.js`. NEVER import raw JSON directly inside page components.

## Data Schemas

### Hero Slide Schema
```json
{
  "id": "string",
  "badge": {
    "text": "string",
    "icon": "string",
    "textClass": "string"
  },
  "title": "string",
  "titleHighlight": "string",
  "description": "string",
  "bgGradient": "string",
  "primaryCta": { "text": "string", "href": "string" },
  "secondaryCta": { "text": "string", "href": "string" },
  "statBadge": { "value": "string", "label": "string" }
}