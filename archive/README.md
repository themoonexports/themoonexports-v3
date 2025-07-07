# The Moon Exports - v2 Site Archive & AI Agent Instructions

## 📁 Archive Overview

This archive contains references, documentation, and instructions for AI agents to understand and work with the legacy v2 site structure for debugging and reference purposes.

**Current Status**: The v2 site has been fully migrated to Next.js 15 (v3.0), but this archive preserves the architectural knowledge and patterns.

## 🤖 AI Agent Instructions

### When to Use This Archive

Use this archive when you need to:
- **Debug migration issues** between v2 and v3
- **Understand original functionality** that may have been lost
- **Reference old URL structures** for SEO preservation
- **Compare old vs new implementations**
- **Troubleshoot missing features** or content
- **Maintain backward compatibility** for redirects

### How to Use This Archive

1. **Start here**: Read the `v2-architecture.md` for overall structure
2. **Check mappings**: Use `v2-to-v3-mapping.md` for component equivalents
3. **Reference patterns**: See `v2-patterns.md` for common implementations
4. **Debug issues**: Follow `debugging-guide.md` for systematic troubleshooting

### Archive Structure

```
archive/
├── README.md                    # This file - AI agent instructions
├── v2-architecture.md           # Original v2 site structure & technology stack
├── v2-to-v3-mapping.md         # Component/page mappings between versions
├── v2-patterns.md              # Common patterns and implementations in v2
├── debugging-guide.md          # Debugging workflows for AI agents
├── seo-urls.md                 # URL structure changes and redirects needed
├── missing-features.md         # Features that might have been lost in migration
├── asset-references.md         # How assets were used in v2 vs v3
└── legacy-code-patterns/       # Code examples from v2 for reference
    ├── bootstrap-components.md
    ├── jquery-patterns.md
    ├── seo-implementations.md
    └── forms-and-interactions.md
```

## 🔍 Quick Reference Commands for AI Agents

### Debugging Missing Functionality
```bash
# Check if a feature exists in v3
grep -r "feature_name" src/

# Compare with v2 patterns
cat archive/v2-patterns.md | grep -A5 -B5 "feature_name"

# Check SEO URL mappings
cat archive/seo-urls.md | grep "old_url_pattern"
```

### Asset Migration Verification
```bash
# Verify all v2 assets are present
node scripts/verify-assets.js

# Check asset usage in v3
grep -r "asset_name" src/
```

### Component Mapping
```bash
# Find v3 equivalent of v2 component
cat archive/v2-to-v3-mapping.md | grep "old_component_name"
```

## 🚨 Important Notes for AI Agents

### Critical Preservation Points
1. **SEO URLs**: All v2 URLs must redirect to v3 equivalents
2. **Analytics**: Tracking codes must be preserved
3. **Schema Markup**: Business data must remain consistent
4. **Contact Forms**: All lead generation must be maintained
5. **Product Data**: All product information must be preserved

### Common Issues to Watch For
1. **Missing Redirects**: v2 URLs returning 404s
2. **Broken Images**: Asset paths that changed
3. **Lost Analytics**: Tracking code not migrated
4. **Schema Changes**: Different structured data format
5. **Form Submissions**: Contact forms not working

### Debugging Workflow
1. **Identify Issue**: What's broken/missing?
2. **Check Archive**: How was it implemented in v2?
3. **Find Mapping**: What's the v3 equivalent?
4. **Compare Implementation**: Are they functionally equivalent?
5. **Fix or Implement**: Update v3 to match v2 functionality

## 📋 Maintenance Tasks

### Regular Checks
- [ ] Verify all v2 URLs redirect properly
- [ ] Check that all assets are accessible
- [ ] Ensure SEO elements are preserved
- [ ] Validate schema markup consistency
- [ ] Test contact form functionality

### When Adding New Features
- [ ] Check if similar feature existed in v2
- [ ] Follow v2 SEO patterns if applicable
- [ ] Maintain URL structure consistency
- [ ] Preserve any existing analytics tracking

## 🔗 Related Files

- `ASSET_MIGRATION_SUMMARY.md` - Asset migration status
- `public/robots.txt` - SEO directives
- `public/sitemap.xml` - Site structure
- `src/lib/structured-data.ts` - Schema markup
- `src/lib/seo.ts` - SEO utilities

## 📞 Support

For complex migration issues:
1. Check this archive first
2. Review the debugging guide
3. Compare v2 vs v3 implementations
4. Document any findings for future reference

---

**Last Updated**: July 8, 2025
**Archive Version**: 1.0
**Site Version**: v3.0 (Next.js 15)
