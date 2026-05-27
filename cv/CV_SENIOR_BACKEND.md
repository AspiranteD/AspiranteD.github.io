# Guillem Climent Pavia

**Senior Backend & Platform Engineer**

Valencia, Spain · guillemclim@gmail.com · [LinkedIn](https://linkedin.com/in/gcliment) · [GitHub](https://github.com/AspiranteD) · [Portfolio](https://aspiranted.github.io)

---

## Summary

Backend engineer with 5+ years building production systems — from enterprise logistics (Mercadona, AIRBUS) to designing and operating a full e-commerce platform processing ~100 orders/day across 12 marketplace accounts. I specialize in Python/FastAPI APIs, PostgreSQL schema design, data pipelines, and system integrations. Every system I've built handles real traffic, real money, and real operational load.

---

## Experience

### Technical Founder & Lead Engineer — REUSALIA
*April 2023 – Present · Valencia, Spain*

Solely designed and built the entire backend platform for a physical e-commerce business (Amazon liquidation → multi-marketplace resale). The system runs in production daily, used by 6 employees.

- Architected **FastAPI backend** with 25+ SQLModel data models, 35+ Alembic migrations, ~60 REST endpoints
- Designed **PostgreSQL schema** with views, materialized views, triggers, and financial reconciliation logic
- Built **reverse-engineered API client** for Wallapop (private, undocumented) — cookie auth, anti-detection, parallel extraction across 12 accounts. 5 major versions, 2,100+ lines
- Engineered **AI enrichment pipeline**: Amazon scraping → GPT-4 categorization → description generation → marketplace sync. Saves ~40h/week vs manual processing
- Implemented **Cloud-Local Bridge**: database command queue with exclusive locking, heartbeat monitoring, ~60s failover — bridges Retool Cloud to on-premise hardware (Brother QL-700 label printer)
- Built **multi-marketplace sync engine**: PostgreSQL as single source of truth, pushes formatted data to Wallapop, eBay (Feed API), and PortalHero
- Executed **Google Sheets → PostgreSQL migration**: 5-phase pipeline (extract → validate → migrate → sync → verify), 3 years of production data, zero-downtime cutover
- Managed **APScheduler** with 5+ recurring jobs, zombie process watchdog, background task orchestration

### Senior Software Engineer — LittleBig Connection
*December 2022 – February 2024 · Valencia, Spain*

- Built REST APIs with **Java/Spring Boot**, OAuth2/JWT security modules
- Designed and optimized **MySQL schemas**, executed data migration plans
- **Docker** containerization for consistent multi-environment deployments
- Distributed remote-first team, agile methodologies

### Software Engineer — Sopra Steria *(Client: AIRBUS)*
*November 2021 – December 2022 · Valencia, Spain*

- Technical ownership of e-Business contract infrastructure — **monolith → microservices** decomposition
- Java 11 / Spring Boot REST APIs with strict aviation security compliance
- CI/CD pipelines with **Jenkins + OpenShift** cloud deployments

### Software Engineer — Capgemini *(Client: Mercadona)*
*October 2020 – February 2022 · Valencia, Spain*

- Optimized legacy supply chain systems processing **massive daily transaction volumes**
- Redesigned bottlenecked **OracleSQL** databases to accelerate batch processing
- Primary technical interface for Europe's largest grocery supply chain

---

## Technical Stack

**Languages:** Python, Java, SQL, JavaScript, C++
**Backend:** FastAPI, Spring Boot, SQLModel, REST API Design
**Databases:** PostgreSQL, MySQL, OracleSQL, SQLite, NeonDB
**Data:** pandas, ETL pipelines, Google Sheets API, data migration
**AI:** OpenAI GPT-4, LLM pipelines, prompt engineering
**Automation:** BeautifulSoup, Selenium, reverse engineering, anti-detection
**DevOps:** Docker, Jenkins, OpenShift, Git, CI/CD
**Integrations:** eBay API (OAuth2), Wallapop API (rev. eng.), Google Drive, Retool

---

## Education

**Multimedia Engineering (B.Eng.)** — Universitat de València *(2016–2021)*

---

## Languages

Spanish (native) · English (professional) · Valencian/Catalan (native)
