# warehouse-management-system

A modern warehouse management system built with **Java Spring Boot** backend and **React** frontend.

## 🚀 Features

- **Product Management**: CRUD for inventory items
- **Transaction Management**: IN/OUT tracking
- **Excel Upload**: Bulk import with Indian date format
- **Inventory Tracking**: Real-time quantity and batch tracking

## Tech Stack

- Backend: Spring Boot 3.2, Java 17
- Frontend: React 18 (Create React App)
- Database: MySQL (production) / H2 (local dev fallback)

## Local Development

1. Copy `.env.example` to `.env` and fill secrets (do NOT commit `.env`).
2. Start MySQL or use H2 fallback (no config needed for H2).
3. Build & run backend:
   ```bash
   cd backend
   mvn -DskipTests package
   java -jar target/warehouse-management-1.0.0.jar
   ```
4. Run frontend (dev):
   ```bash
   cd frontend
   npm install
   npm start
   ```



## Environment Variables

- Never commit `.env` files with secrets.
- Use `.env.example` for reference only.
- Inject secrets via Render or your deployment platform.

