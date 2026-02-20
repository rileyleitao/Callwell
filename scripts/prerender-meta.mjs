/**
 * prerender-meta.mjs
 *
 * Runs after `vite build`.  For every route it:
 *   1. Copies dist/index.html
 *   2. Injects the correct <title>, <meta description>, <link canonical>,
 *      Open Graph / Twitter tags
 *   3. Injects a lightweight <noscript> / hidden block inside #root so
 *      crawlers that don't run JS still see the H1 + intro text
 *   4. Writes to  dist/<route>/index.html  (or dist/index.html for "/")
 *
 * Zero external dependencies – pure Node built-ins.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const distDir = path.resolve(__dirname, '..', 'dist')

// ── Route meta (mirrors src/router/index.js) ──────────────────────────
const routes = [
    {
        path: '/',
        title: 'Callwell - AI Office Assistant',
        description: 'Callwell is an AI office assistant — answering calls, booking appointments, and managing scheduling 24/7 for service businesses.',
        h1: 'AI Office Assistant for Service Businesses'
    },
    {
        path: '/pricing',
        title: 'Pricing | Callwell',
        description: 'Choose the perfect plan for your service business. All plans include 24/7 AI call answering and automated appointment booking.',
        h1: 'Pricing'
    },
    {
        path: '/how-it-works',
        title: 'Your Automated Office Assistant for Calls & Scheduling | Callwell',
        description: 'A virtual office assistant that never misses a call, books appointments automatically, and handles scheduling 24/7.',
        h1: 'How It Works'
    },
    {
        path: '/automated-call-answering',
        title: 'Automated Call Answering for Service Businesses | Callwell',
        description: 'Never miss another call. Our AI answers calls and books appointments automatically, handling every customer interaction 24/7.',
        h1: 'Automated Call Answering'
    },
    {
        path: '/ai-appointment-scheduling',
        title: 'AI That Schedules Appointments Automatically | Callwell',
        description: 'Automated booking for service businesses — handles scheduling, cancellations, and waitlists without human intervention.',
        h1: 'AI Appointment Scheduling'
    },
    {
        path: '/emergency-call-routing',
        title: 'Intelligent Escalations for Emergency Calls | Callwell',
        description: 'Never miss an emergency. Intelligent routing detects urgent calls and escalates them to your team automatically.',
        h1: 'Emergency Call Routing'
    },
    {
        path: '/products',
        title: 'Products | Callwell',
        description: 'Complete AI-powered solutions to handle calls, book appointments, and grow your service business — all automatically.',
        h1: 'Products'
    },
    {
        path: '/solutions',
        title: 'Solutions for Service Businesses | Callwell',
        description: 'From after-hours calls to peak demand periods, Callwell handles every scenario so you never miss a booking opportunity.',
        h1: 'Solutions'
    },
    {
        path: '/resources',
        title: 'Resources | Callwell',
        description: 'Learn how Callwell works, read the FAQ, blog, and find our terms of service and privacy policy.',
        h1: 'Resources'
    },
    {
        path: '/faq',
        title: 'Frequently Asked Questions | Callwell',
        description: 'Find answers to common questions about Callwell AI office assistant, pricing, setup, and support.',
        h1: 'Frequently Asked Questions'
    },
    {
        path: '/blog',
        title: 'Blog | Callwell',
        description: 'Expert advice and insights for service businesses on AI call answering, appointment booking, and growth.',
        h1: 'Blog'
    },
    {
        path: '/blog/missed-calls-cost',
        title: 'How Many Calls Is Your Business Missing After Hours? | Callwell Blog',
        description: 'Learn how missed calls cost service businesses thousands in lost revenue and how AI call answering can help.',
        h1: 'How Many Calls Is Your Business Missing After Hours?'
    },
    {
        path: '/blog/ai-receptionist-vs-answering-service',
        title: 'AI Receptionist vs Answering Service: What Works in 2026 | Callwell Blog',
        description: 'Compare AI receptionists to traditional answering services. Differences in cost, capability, and experience.',
        h1: 'AI Receptionist vs Answering Service'
    },
    {
        path: '/blog/phone-setup-service-business',
        title: 'Best Phone Setup for Service Businesses in 2026 | Callwell Blog',
        description: 'The ideal phone setup for plumbers, electricians, and contractors. No new hardware, just better call handling.',
        h1: 'Best Phone Setup for Service Businesses'
    },
    {
        path: '/industries',
        title: 'Industries We Serve | Callwell',
        description: 'AI answering and scheduling for plumbing, HVAC, electricians, construction, dental, medical, and physiotherapy.',
        h1: 'Industries We Serve'
    },
    {
        path: '/industries/plumbing-hvac',
        title: 'AI Answering Service for Plumbing & HVAC | Callwell',
        description: 'AI phone answering for plumbing and HVAC companies. Handles emergency calls, books appointments, dispatches 24/7.',
        h1: 'AI Answering Service for Plumbing & HVAC'
    },
    {
        path: '/industries/electrician',
        title: 'AI Answering Service for Electricians | Callwell',
        description: 'AI phone answering for electrical contractors. Handles emergency calls, books appointments, dispatches 24/7.',
        h1: 'AI Answering Service for Electricians'
    },
    {
        path: '/industries/construction',
        title: 'AI Answering Service for Contractors | Callwell',
        description: 'AI phone answering for general contractors. Handles project inquiries, books consultations, captures leads 24/7.',
        h1: 'AI Answering Service for Contractors'
    },
    {
        path: '/industries/window-door',
        title: 'AI Answering Service for Window & Door Installation | Callwell',
        description: 'AI phone answering for window and door companies. Books installations and captures leads 24/7.',
        h1: 'AI Answering Service for Window & Door Installation'
    },
    {
        path: '/industries/dental-clinics',
        title: 'AI Answering Service for Dental Clinics | Callwell',
        description: 'AI phone answering for dental practices. Handles calls 24/7, books appointments, and keeps your chairs full.',
        h1: 'AI Answering Service for Dental Clinics'
    },
    {
        path: '/industries/medical-clinics',
        title: 'AI Answering Service for Medical Clinics | Callwell',
        description: 'AI phone answering for medical practices. Handles calls 24/7, books appointments, and runs your front desk.',
        h1: 'AI Answering Service for Medical Clinics'
    },
    {
        path: '/industries/physiotherapy-massage',
        title: 'AI Answering Service for Physiotherapy & Massage | Callwell',
        description: 'AI phone answering for physiotherapy and massage practices. Books appointments and keeps your schedule full.',
        h1: 'AI Answering Service for Physiotherapy & Massage'
    },
    {
        path: '/terms',
        title: 'Terms of Service | Callwell',
        description: 'Read the Terms of Service for Callwell AI office assistant. Your rights and responsibilities using our services.',
        h1: 'Terms of Service'
    },
    {
        path: '/privacy',
        title: 'Privacy Policy | Callwell',
        description: 'How Callwell collects, uses, and protects your personal information. Compliant with Canadian privacy law (PIPEDA).',
        h1: 'Privacy Policy'
    },
    {
        path: '/login',
        title: 'Sign in to your account | Callwell',
        description: 'Sign in to your Callwell account to manage your AI office assistant settings.',
        h1: 'Sign In'
    }
]

// ── Helpers ────────────────────────────────────────────────────────────

function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function buildCanonical(routePath) {
    return routePath === '/' ? 'https://callwell.io' : `https://callwell.io${routePath}`
}

// ── Main ──────────────────────────────────────────────────────────────

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8')

let processed = 0

for (const route of routes) {
    const url = buildCanonical(route.path)
    const title = escapeHtml(route.title)
    const desc = escapeHtml(route.description)

    let html = template

    // Replace <title>
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)

    // Replace meta description
    html = html.replace(
        /<meta\s+name="description"[^>]*>/,
        `<meta name="description" content="${desc}">`
    )

    // Replace canonical link
    html = html.replace(
        /<link\s+rel="canonical"[^>]*>/,
        `<link rel="canonical" href="${url}">`
    )

    // Replace OG tags
    html = html.replace(
        /<meta\s+property="og:url"[^>]*>/,
        `<meta property="og:url" content="${url}">`
    )
    html = html.replace(
        /<meta\s+property="og:title"[^>]*>/,
        `<meta property="og:title" content="${title}">`
    )
    html = html.replace(
        /<meta\s+property="og:description"[^>]*>/,
        `<meta property="og:description" content="${desc}">`
    )

    // Replace Twitter tags
    html = html.replace(
        /<meta\s+name="twitter:url"[^>]*>/,
        `<meta name="twitter:url" content="${url}">`
    )
    html = html.replace(
        /<meta\s+name="twitter:title"[^>]*>/,
        `<meta name="twitter:title" content="${title}">`
    )
    html = html.replace(
        /<meta\s+name="twitter:description"[^>]*>/,
        `<meta name="twitter:description" content="${desc}">`
    )

    // Inject SEO content inside #root so crawlers see H1 + text.
    // Vue replaces this when it mounts.
    const seoBlock = [
        `<div id="root">`,
        `  <h1>${escapeHtml(route.h1)}</h1>`,
        `  <p>${desc}</p>`,
        `  <noscript><p>Please enable JavaScript to use Callwell. <a href="https://callwell.io">Visit homepage</a>.</p></noscript>`
    ].join('\n')

    html = html.replace(/<div id="root">\s*<\/div>/, seoBlock)

    // Write file
    if (route.path === '/') {
        fs.writeFileSync(path.join(distDir, 'index.html'), html)
    } else {
        const dir = path.join(distDir, route.path)
        fs.mkdirSync(dir, { recursive: true })
        fs.writeFileSync(path.join(dir, 'index.html'), html)
    }

    processed++
}

console.log(`✅ Pre-rendered meta for ${processed} routes`)
