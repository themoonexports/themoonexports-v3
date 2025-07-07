# AI Agent Debugging Guide

## 🔍 Systematic Debugging Approach

### 1. Issue Identification
When an issue is reported, first categorize it:

#### Common Issue Categories
- **🔗 URL/Routing Issues**: 404s, broken links, redirect problems
- **🎨 UI/Styling Issues**: Layout problems, responsive design issues
- **📊 SEO Issues**: Missing meta tags, structured data problems
- **📱 Functionality Issues**: Forms not working, missing features
- **🖼️ Asset Issues**: Images not loading, missing resources
- **⚡ Performance Issues**: Slow loading, optimization problems

### 2. Initial Debugging Steps

#### Check Current State
```bash
# Verify site builds successfully
npm run build

# Check for linting errors
npm run lint

# Run development server
npm run dev
```

#### Check Asset Availability
```bash
# Verify all images are present
ls -la public/images/

# Run asset verification script
node scripts/verify-assets.js
```

#### Check URL Structure
```bash
# Check sitemap for all URLs
cat public/sitemap.xml

# Verify robots.txt
cat public/robots.txt
```

### 3. v2 vs v3 Comparison Workflow

#### Step 1: Identify v2 Implementation
```bash
# Check v2 architecture documentation
cat archive/v2-architecture.md

# Find v2 patterns
grep -r "feature_name" archive/
```

#### Step 2: Find v3 Equivalent
```bash
# Check mapping guide
cat archive/v2-to-v3-mapping.md | grep -A5 -B5 "feature_name"

# Search current implementation
grep -r "feature_name" src/
```

#### Step 3: Compare Functionality
```bash
# Check component structure
find src/components -name "*feature*"

# Verify page implementation
find src/app -name "*feature*"
```

## 🚨 Common Issues & Solutions

### Issue 1: Missing Page/Component
**Symptoms**: 404 error, component not found
**Debugging Steps**:
1. Check if page existed in v2: `cat archive/v2-architecture.md`
2. Verify v3 mapping: `cat archive/v2-to-v3-mapping.md`
3. Check file structure: `find src/app -name "*page*"`
4. Create missing component/page

### Issue 2: Styling Problems
**Symptoms**: Layout broken, responsive issues
**Debugging Steps**:
1. Check v2 CSS patterns: `cat archive/v2-patterns.md`
2. Verify Tailwind classes: `cat archive/v2-to-v3-mapping.md`
3. Test responsive breakpoints
4. Fix CSS classes

### Issue 3: SEO Issues
**Symptoms**: Missing meta tags, poor search rankings
**Debugging Steps**:
1. Check v2 SEO implementation: `cat archive/v2-architecture.md`
2. Verify current SEO: `cat src/lib/seo.ts`
3. Check structured data: `cat src/lib/structured-data.ts`
4. Test with SEO tools

### Issue 4: Form Problems
**Symptoms**: Forms not submitting, validation errors
**Debugging Steps**:
1. Check v2 form implementation: `cat archive/v2-patterns.md`
2. Verify v3 form: `find src -name "*form*"`
3. Check API routes: `find src/app/api -name "*"`
4. Test form submission

### Issue 5: Asset Loading Issues
**Symptoms**: Images not loading, 404 for assets
**Debugging Steps**:
1. Check asset structure: `ls -la public/images/`
2. Verify asset usage: `grep -r "asset_name" src/`
3. Check Next.js Image component usage
4. Fix asset paths

## 🔧 Debugging Tools & Commands

### Development Tools
```bash
# Start development server with debug info
npm run dev -- --debug

# Build with verbose output
npm run build -- --debug

# Check TypeScript errors
npx tsc --noEmit
```

### SEO Debugging
```bash
# Check meta tags
curl -s https://themoonexports.com | grep -i "<meta"

# Verify structured data
curl -s https://themoonexports.com | grep -o '<script type="application/ld+json">.*</script>'

# Check sitemap
curl -s https://themoonexports.com/sitemap.xml
```

### Asset Debugging
```bash
# Check image optimization
npm run build && find .next -name "*.jpg" -o -name "*.png"

# Verify asset paths
grep -r "public/images" src/

# Check for broken image links
grep -r "images/" src/ | grep -v "next/image"
```

## 📊 Performance Debugging

### Lighthouse Audit
```bash
# Install lighthouse
npm install -g lighthouse

# Run audit
lighthouse https://themoonexports.com --output=json --output=html
```

### Bundle Analysis
```bash
# Install bundle analyzer
npm install -g @next/bundle-analyzer

# Analyze bundle
npm run build && npm run analyze
```

## 🔍 Systematic Issue Resolution

### 1. Reproduce the Issue
- Test in multiple browsers
- Check different screen sizes
- Verify on different devices

### 2. Isolate the Problem
- Check specific components
- Test individual pages
- Verify API endpoints

### 3. Compare with v2 Implementation
- Reference v2 patterns
- Check original functionality
- Verify business logic

### 4. Implement Solution
- Follow v3 patterns
- Maintain consistency
- Test thoroughly

### 5. Verify Fix
- Test all related functionality
- Check for regressions
- Validate with stakeholders

## 🗂️ Documentation Updates

### When Issues Are Fixed
1. **Update Archive**: Document any missing v2 patterns found
2. **Update Mapping**: Add new component mappings
3. **Update Patterns**: Document new v3 patterns
4. **Update This Guide**: Add new debugging scenarios

### Example Documentation Template
```markdown
## Issue: [Brief Description]
**Date**: [Date]
**Symptoms**: [What was broken]
**Root Cause**: [Why it happened]
**Solution**: [How it was fixed]
**Prevention**: [How to avoid in future]
```

## 🚀 Preventive Measures

### Regular Checks
- [ ] Monthly lighthouse audits
- [ ] Weekly broken link checks
- [ ] Daily build verifications
- [ ] Regular SEO audits

### Automated Monitoring
- [ ] Set up error monitoring
- [ ] Configure performance alerts
- [ ] Monitor search rankings
- [ ] Track conversion rates

---

**Remember**: This guide is for AI agents to systematically debug issues by comparing v2 and v3 implementations. Always document findings for future reference.
