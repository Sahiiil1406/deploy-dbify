### Problem You're Solving

Building database APIs is complex and time-consuming. Developers waste days on:
- Setting up servers and infrastructure
- Writing repetitive CRUD boilerplate
- Managing connections and scaling
- Manually updating APIs when schemas change

Dbify eliminates this overhead—just connect your database and get a production-ready API instantly.

### How the App Works

1. **Connect**: Provide your database URL
2. **Receive**: Get **projectId** and **apiKey** instantly
3. **Build**: Use standardized CRUD endpoints immediately

Auto-generated schema visualizer and docs are created for you. Dbify handles connection pooling, caching, schema detection, and auto-scaling automatically.

### Notable Features

- **Auto Schema Sync**: Detects database changes and updates APIs automatically
- **Real-time Dashboard**: Monitor requests, performance, and schema history
- **Enterprise Security**: RBAC, social logins, API key management (Better-Auth)
- **Built for Scale**: Redis caching, PgBouncer pooling, async workers
- **Web Scraping**: Docs and other resources are scraped and stored in vector DB to provide context to the agent
- **AI Agent**: Natural language queries and documentation search (Inkeep + OpenAI). Performs database operations and used scraped docs for context
- **Smart Alerts**: Email notifications for schema changes, usage spikes, and security alerts like DDoS (Resend)

### Why Did You Build This

Honestly, we've rebuilt the same database API infrastructure way too many times. Each project meant 2-3 days of setup and ongoing maintenance headaches. We wanted something that just works out of the box.

Dbify is perfect for quick prototyping—ideal for hackathons where time is everything, and MVPs for startups looking to validate ideas fast without getting stuck in infrastructure. Your data never leaves your database, so there's zero vendor lock-in. You stay in control.

Looking ahead, we're planning to expand beyond traditional databases to support object stores like S3 and decentralized storage solutions like IPFS, making Dbify a truly universal data access layer.
### Modern Stack Cohost(s) Included

✅ Convex, Firecrawl, Better-Auth, Resend, Inkeep, OpenAI
## Tech Stack

**Backend**: Node.js, Express  
**Primary DB**: PostgreSQL  
**Realtime Analytics**: Convex  
**Queue**: RabbitMQ  
**Cache**: Redis  
**Connection Pool**: PgBouncer  
**Vector Search**: ChromaDB  
**Auth**: Better-Auth  
**Notifications**: Resend  
**AI**: Inkeep, OpenAI  
**Scraping**: Firecrawl

### Prize Category: InKeep + OpenAI ✅

