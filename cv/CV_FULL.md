# Guillem Climent Pavia

**Technical Founder · Full-Stack Engineer · Systems Architect**

Valencia, Spain · [GitHub](https://github.com/AspiranteD) · [Portfolio](https://aspiranted.github.io)

---

## Professional Summary

Technical founder and full-stack engineer with 5+ years of experience building production systems at scale — from high-volume enterprise logistics (Mercadona, AIRBUS) to founding and operating my own e-commerce automation company.

I've architected and deployed end-to-end platforms that process thousands of SKUs across multiple marketplaces (Amazon, Wallapop, eBay), built AI-powered enrichment pipelines, reverse-engineered private APIs, migrated production databases from spreadsheets to PostgreSQL, and integrated physical hardware (label printers) into cloud workflows — all while scaling a team from 3 to 6 and running day-to-day business operations.

I don't just write code. I build systems that run businesses.

---

## Core Competencies

### Architecture & Backend
- **API Design**: RESTful APIs with FastAPI (Python) and Spring Boot (Java)
- **Database Engineering**: PostgreSQL, MySQL, OracleSQL — schema design, migrations, materialized views, performance tuning
- **Distributed Systems**: Cloud/local hybrid architectures, command queues, lock-based coordination, heartbeat failover
- **Task Orchestration**: APScheduler, background workers, multi-threaded extraction pipelines

### Automation & Integration
- **Web Scraping**: BeautifulSoup, Selenium, anti-detection (UA rotation, request fingerprinting, image perturbation)
- **Reverse Engineering**: Dissecting private REST APIs (Wallapop), session/cookie/bearer auth flows, undocumented endpoints
- **API Integration**: eBay (OAuth2 + Feed API + Fulfillment API), Google Sheets/Drive, OpenAI, Amazon product pages
- **CI/CD & DevOps**: Jenkins, OpenShift, Docker, Git pipelines, automated deployments

### AI & Data
- **LLM Integration**: OpenAI GPT for product categorization, description generation, keyword extraction — all in production
- **Data Engineering**: ETL pipelines, Google Sheets → PostgreSQL migrations, CSV/manifest processing, reconciliation systems
- **Computer Vision**: OpenCV image transformations for marketplace anti-duplicate detection

### Frontend & UI
- **Web**: Angular (NgRx state management), Vue.js, vanilla HTML/CSS/JS
- **Low-Code/Internal Tools**: Retool as internal ERP frontend (342+ files: queries, scripts, transformers)

### Operations & Leadership
- **Team Management**: Founded and scaled a business from 3 to 6 full-time employees (logistics, warehouse, administration)
- **Business Operations**: End-to-end — sourcing, inventory, pricing, fulfillment, customer service, accounting
- **B2B Consulting**: System audits, database bottleneck resolution, infrastructure optimization for external clients

---

## Professional Experience

### Technical Founder & Lead Engineer
**REUSALIA** · Self-employed  
*April 2023 – Present · Valencia, Spain*

Founded and built from scratch a physical e-commerce operations business powered by custom automation, handling everything from business strategy and team management to architecting the entire technical infrastructure.

**Business Impact:**
- Built and scaled a team from 3 to 6 full-time employees across logistics, warehouse operations, and administration
- Processed thousands of Amazon liquidation SKUs through a fully automated pipeline: sourcing → inventory → enrichment → listing → fulfillment
- Expanded from single-channel (Wallapop) to multi-marketplace (Wallapop + eBay + PortalHero) with unified inventory management

**Technical Architecture — Internal ERP System:**
- **Backend API** (FastAPI + SQLModel + PostgreSQL on NeonDB): 25+ data models, RESTful endpoints for inventory, orders, sales, invoicing, appointments, and cash management
- **Frontend** (Retool Cloud): Full internal ERP with 342 files — order management, inventory search, invoicing, incident tracking, mobile barcode scanner, chat analytics dashboards
- **Hybrid Cloud/Local Architecture**: Retool Cloud ↔ NeonDB ↔ Local backend with `CommandPoller` (lock/heartbeat/failover pattern for bridging cloud UI to local hardware and processes)

**Automation Systems Built:**
- **Multi-Account Wallapop Extractor**: Reverse-engineered private API, cookie-based auth with automatic refresh, anti-detection (UA rotation, request timing), ThreadPoolExecutor for parallel multi-account extraction. Evolved through 5 major versions (V1→V3) with increasing sophistication (bundles, parallel processing, cookie management)
- **AI Product Enrichment Pipeline**: Amazon HTML scraping → GPT-powered categorization (hierarchical JSON tree + LLM fallback) → description/title/keyword generation → listing sync. Fully idempotent, rate-limited, auto-enqueued on server startup
- **eBay Automation (Dual-Mode)**: CSV bulk upload via Seller Hub + fully automated Feed API integration. Handles add/end/relist/import orders/ship with tracking. OAuth2 token refresh, 1000-item batched uploads
- **PortalHero Marketplace Sync**: Materialized view → CSV feed → Google Drive upload with temporal ID randomization for anti-tracking
- **Label Printing System**: Brother QL-700 integration — downloads carrier labels from Wallapop API, generates QR codes (Correos), Code128 barcodes (LPN), prints via USB. Triggered remotely from Retool via command queue
- **Automated Scheduler**: APScheduler with 5 recurring jobs (orders, chats, listings, eBay relist, price updates) + zombie watchdog process

**Data Engineering:**
- **Google Sheets → PostgreSQL Migration**: 5-phase production migration pipeline with dry-run/execute modes, financial reconciliation per Amazon truckload (A2Z), documented cutover plan. Hundreds of reconciliation reports generated
- **Analytics Suite**: 15+ audit/investigation scripts for Wallapop shadow listings, duplicate detection, policy compliance, email parsing (MBOX), wallet reconciliation
- **Database Schema**: 16 modular DDL files, 35+ incremental migrations, views, materialized views, trigger functions

**Crisis Management — DANA Floods (October 2024):**
- Six months after moving to an industrial warehouse in Alfafar (April 2024), the DANA floods devastated the facility in October 2024 — one of the hardest-hit areas in the Valencia region
- Led crisis response: organized and directed 50-60 people (volunteers and military personnel), coordinating cleanup and recovery operations; navigated insurance claims and emergency budgets
- Rebuilt the company from scratch in 2 months: redesigned systems, improved documentation, expanded team from 3 to 5 employees
- Used the forced reset as an opportunity to migrate the entire tech stack to production-grade infrastructure (PostgreSQL + Retool ERP)

**Key Metrics:**
- ~180 Python scripts in the backend repository alone
- 25+ SQLModel data models
- 40+ test files (unit, integration, functional, performance)
- Zero-downtime production operation for 2+ years

---

### Senior Software Engineer
**LittleBig Connection** · Full-time  
*December 2022 – February 2024 · Valencia, Spain (Hybrid)*

Full-stack engineer delivering scalable enterprise applications in a remote-first international environment.

- **Backend**: Engineered robust REST APIs using Java and Spring Boot with modern security modules (OAuth2, JWT)
- **Frontend**: Developed modular Angular interfaces, reducing client-side rendering bottlenecks and improving maintainability
- **Data & Infrastructure**: Designed and optimized MySQL database schemas, executed complex data migration plans, containerized applications via Docker for consistent multi-environment deployments
- **Collaboration**: Worked across distributed teams using agile methodologies, code reviews, and CI/CD best practices

*Note: Overlapped with early REUSALIA period — managed both roles concurrently, demonstrating capacity to operate at high intensity across multiple contexts.*

---

### Software Engineer
**Sopra Steria** · Full-time (Client: AIRBUS)  
*November 2021 – December 2022 · Valencia, Spain*

Full-stack engineer with technical ownership of core systems for Tier-1 aviation sector clients.

- **Backend Ownership**: Took full technical ownership of the e-Business contract infrastructure, decoupling high-load monolithic systems into secure, independent REST APIs using Java 11 and Spring Boot
- **Frontend Performance**: Re-architected application state management using Angular 13 and NgRx, eliminating UI rendering freezes that had been blocking the design team
- **DevOps**: Configured CI pipelines using Git and Jenkins inside OpenShift cloud environments, enabling automated multi-stage deployments
- **Domain**: Aviation procurement and contract management systems with strict security and compliance requirements

---

### Software Engineer
**Capgemini** · Full-time (Client: Mercadona)  
*October 2020 – February 2022 · Valencia, Spain (Hybrid)*

Full-stack engineer in the Custom Software Development (CSD) department, deployed on high-volume enterprise logistics solutions for Spain's largest supermarket chain.

- **Legacy Optimization**: Audited and optimized critical legacy transaction layers processing massive supply chain data using Java 11 and high-performance C++ batch scripting
- **Database Overhaul**: Redesigned bottlenecked relational databases (OracleSQL / MyBatis) to accelerate custom workflow transactions handling millions of daily records
- **Stakeholder Management**: Acted as primary technical interface for corporate clients, translating complex logistics and compliance rules into technical specifications and actionable development tasks
- **Scale**: Systems served one of Europe's largest grocery supply chains — every optimization had measurable impact on throughput

---

## Education

### Multimedia Engineering (B.Eng.)
**Universitat de València**  
*September 2016 – February 2021*

Interdisciplinary engineering degree combining computer science, software development, UX/UI design, and audiovisual technologies.

**Key areas:**
- Programming & Web Development (HTML, CSS, JavaScript, mobile development)
- Software Engineering (agile methodologies, project management, system design)
- Multimedia Technologies (video/audio processing, 3D, VR/AR)
- UX/UI Design (user research, interaction design, visual communication)

---

## Technical Stack

### Languages
`Python` · `Java` · `JavaScript/TypeScript` · `SQL` · `C++` · `HTML/CSS`

### Backend & APIs
`FastAPI` · `Spring Boot` · `SQLModel` · `REST API Design`

### Databases
`PostgreSQL (NeonDB)` · `MySQL` · `OracleSQL` · `SQLite`

### Frontend
`Angular` · `Vue.js` · `HTML/CSS/JS` · `NgRx`

### AI & ML
`OpenAI API (GPT-4)` · `LLM Prompt Engineering` · `NLP Pipelines`

### Data & ETL
`pandas` · `NumPy` · `CSV/Excel Processing` · `Google Sheets API` · `Data Migration Pipelines`

### Scraping & Automation
`BeautifulSoup` · `Selenium` · `Requests` · `Anti-Detection Systems` · `Reverse Engineering`

### DevOps & Infrastructure
`Docker` · `Jenkins` · `OpenShift` · `Git` · `CI/CD Pipelines` · `NeonDB (Cloud Postgres)`

### Integrations
`eBay API (OAuth2 + Feed + Fulfillment)` · `Google Drive/Sheets API` · `OpenAI API` · `Wallapop API (Rev. Eng.)` · `Brother QL-700 (Hardware)` · `MEGA API` · `ImgBB API`

### Tools & Platforms
`Retool` · `APScheduler` · `ThreadPoolExecutor` · `pytest` · `pre-commit` · `OpenCV`

---

## Featured Projects

### 1. AI Product Enrichment Pipeline
Automated product data enrichment using web scraping and LLMs. Scrapes Amazon product pages, categorizes items using a hierarchical JSON taxonomy with GPT fallback, generates marketplace-optimized titles/descriptions/keywords. Processes thousands of SKUs in production.  
**Stack:** Python, OpenAI GPT-4, BeautifulSoup, FastAPI, PostgreSQL  
**→** [github.com/AspiranteD/ai-product-enrichment](https://github.com/AspiranteD/ai-product-enrichment)

### 2. Amazon Product Scraper
Production-grade scraper for Amazon product pages — extracts titles, prices, images (hi-res), bullet points, and product features. Built with anti-detection measures (UA rotation, request throttling) and robust error handling.  
**Stack:** Python, BeautifulSoup, Requests  
**→** [github.com/AspiranteD/amazon-product-scraper](https://github.com/AspiranteD/amazon-product-scraper)

### 3. Wallapop Data Extractors
Reverse-engineered Wallapop's private API to extract orders, conversations, and listings across multiple accounts. Features cookie-based auth with automatic token refresh, anti-detection, parallel extraction, and 5 major version iterations.  
**Stack:** Python, Requests, ThreadPoolExecutor, SQLModel, PostgreSQL  
**→** [github.com/AspiranteD/wallapop-data-extractors](https://github.com/AspiranteD/wallapop-data-extractors)

### 4. eBay Automation Toolkit
End-to-end eBay marketplace automation: OAuth2 authentication, bulk CSV generation for Seller Hub, Feed API integration for automated uploads, order import via Fulfillment API, and shipping with tracking.  
**Stack:** Python, eBay REST APIs, OAuth2, pandas  
**→** [github.com/AspiranteD/ebay-automation-toolkit](https://github.com/AspiranteD/ebay-automation-toolkit)

### 5. Cloud-Local Command Bridge
Architectural pattern for bridging cloud UIs (Retool) with local backend services through a database command queue. Features exclusive locking, heartbeat monitoring, automatic failover (~60s), and supports print/enrichment commands.  
**Stack:** Python, FastAPI, PostgreSQL, APScheduler  
**→** [github.com/AspiranteD/cloud-local-command-bridge](https://github.com/AspiranteD/cloud-local-command-bridge)

### 6. Sheets-to-Postgres Migration
Production data migration pipeline from Google Sheets to PostgreSQL in 5 phases: extract → validate → migrate → sync → verify. Includes financial reconciliation per Amazon truckload, dry-run modes, and hundreds of generated audit reports.  
**Stack:** Python, gspread, psycopg2, PostgreSQL, pandas  
**→** [github.com/AspiranteD/sheets-to-postgres-migration](https://github.com/AspiranteD/sheets-to-postgres-migration)

### 7. Marketplace Sync Engine
Multi-platform inventory synchronization: maintains a single source of truth in PostgreSQL and syncs to Wallapop, eBay, and PortalHero. Handles feed generation, price updates, stock management, and marketplace-specific formatting.  
**Stack:** Python, FastAPI, PostgreSQL, Google Drive API  
**→** [github.com/AspiranteD/marketplace-sync-engine](https://github.com/AspiranteD/marketplace-sync-engine)

### 8. Inventory Operations API
Full REST API for e-commerce inventory management: items (by LPN), orders, sales, invoicing, appointments, expenses, and analytics. Includes automated scheduler, cookie management, and label printing integration.  
**Stack:** Python, FastAPI, SQLModel, PostgreSQL, APScheduler  
**→** [github.com/AspiranteD/inventory-ops-api](https://github.com/AspiranteD/inventory-ops-api)

### 9. Marketplace Auth Manager
Authentication management system for multi-account marketplace operations. Handles Wallapop cookie/bearer lifecycle, automatic token refresh, JWT decoding, validation, and secure storage in PostgreSQL.  
**Stack:** Python, JWT, Requests, PostgreSQL  
**→** [github.com/AspiranteD/marketplace-auth-manager](https://github.com/AspiranteD/marketplace-auth-manager)

### 10. Product Image Pipeline
Image processing pipeline for marketplace listings: downloads from Amazon, applies anti-duplicate transformations (noise, rotation, stretch via OpenCV), resizes/compresses, and uploads to cloud storage (MEGA, ImgBB).  
**Stack:** Python, OpenCV, PIL, NumPy, ThreadPoolExecutor  
**→** [github.com/AspiranteD/product-image-pipeline](https://github.com/AspiranteD/product-image-pipeline)

### 11. Retool ERP Modules
Internal ERP system built on Retool Cloud with 342 files: SQL queries, JS handlers, and data transformers. Modules include order management, inventory, invoicing, incident tracking, chat analytics, mobile scanner, and appointment scheduling.  
**Stack:** SQL, JavaScript, Retool  
**→** [github.com/AspiranteD/retool-erp-modules](https://github.com/AspiranteD/retool-erp-modules)

---

## Languages

- **Spanish**: Native
- **English**: Professional working proficiency
- **Valencian/Catalan**: Native

---

## What Drives Me

I founded a company at 25, built its entire tech stack from zero, survived a catastrophic flood that destroyed our warehouse, rebuilt the company from scratch, and operated it for 3+ years while simultaneously working as a senior engineer at enterprise consultancies. I've written code that processes real money, manages real inventory, and coordinates real people in a warehouse.

I'm not a tutorial developer. I build systems that run businesses — and I've proven it by running one myself.
