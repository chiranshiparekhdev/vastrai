# VastrAI System Overview

## Purpose

VastrAI is a multi-tenant AI-powered fashion commerce platform
designed for Indian ethnic-wear retailers.

## Core Problem

Ethnic-wear retailers often have product images but lack the
resources to create professional fashion catalogs and provide
personalized product discovery to customers.

## Core Capabilities

1. Product management
2. AI product understanding
3. AI-generated fashion imagery
4. Semantic product search
5. RAG-powered shopping assistant
6. AI styling recommendations
7. LLM tool calling
8. Multi-tenant retailer management

## High-Level Architecture

React Web
    |
    v
NestJS API
    |
    +---- PostgreSQL + pgvector
    |
    +---- Redis
    |
    +---- Python AI Service
              |
              +---- LLM
              +---- Embeddings
              +---- Image Generation

## Multi-Tenancy

Every tenant-owned resource must be associated with a tenant_id.

Tenant isolation is enforced at the backend and database query
layers.

## Initial Applications

### Web

React + TypeScript frontend.

### API

NestJS + TypeScript backend responsible for business logic,
authentication, authorization, tenant isolation and API orchestration.

### AI Service

Python + FastAPI service responsible for AI-specific workloads.