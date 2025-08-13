# Under Construction Components

## Overview
These components provide a consistent way to display "under construction" messages throughout your portfolio, following the exact same design patterns and styling.

## Components

### 1. UnderConstruction (Full Version)
**File**: `UnderConstruction.tsx`  
**Usage**: Full-page under construction with detailed information, progress bars, and features list.

**Features**:
- 🚧 Construction header with emoji
- Detailed explanation of what's coming
- Progress bars showing development status
- Consistent with portfolio design system
- Mobile responsive
- Uses diagonal line gradients

**Example Usage**:
```tsx
import { UnderConstruction } from '@/components/underConstruction'

const MyPage = () => {
  return (
    <div>
      <UnderConstruction />
    </div>
  )
}
```

### 2. CompactUnderConstruction (Inline Version)
**File**: `compact.tsx`  
**Usage**: Compact version for inline use in other components or sections.

**Features**:
- Simple, centered design
- Perfect for replacing content in existing sections
- Maintains design consistency
- Lightweight and focused

**Example Usage**:
```tsx
import { CompactUnderConstruction } from '@/components/underConstruction'

const MySection = () => {
  return (
    <div>
      <h2>My Section</h2>
      <CompactUnderConstruction />
    </div>
  )
}
```

## Design Consistency

Both components follow your portfolio's design system:

- **Borders**: Uses `border-border` class for consistent border styling
- **Typography**: Uses `font-mono` and your established text hierarchy
- **Colors**: Uses CSS custom properties (`text-foreground`, `text-foreground/80`, etc.)
- **Spacing**: Follows the same padding and margin patterns
- **Layout**: Uses the same `max-w-3xl` container and border structure
- **Components**: Integrates with `DiagonalLineGradientBgFull` for visual consistency

## When to Use

### Use UnderConstruction (Full) when:
- Creating a dedicated under-construction page
- Need to show detailed progress information
- Want to explain what's coming in detail
- Building a placeholder for a major section

### Use CompactUnderConstruction when:
- Replacing content in an existing section
- Need a simple placeholder
- Want minimal visual impact
- Building inline placeholders

## Customization

Both components are built with Tailwind CSS and can be easily customized:

- **Colors**: Modify the color classes to match your theme
- **Content**: Update the text content and progress percentages
- **Layout**: Adjust spacing and sizing as needed
- **Icons**: Replace emojis with custom icons or images

## File Structure
```
src/components/underConstruction/
├── index.tsx              # Exports both components
├── UnderConstruction.tsx  # Full version component
├── compact.tsx            # Compact version component
└── README.md              # This documentation
```

## Integration

These components are designed to work seamlessly with your existing portfolio:

- Import from `@/components/underConstruction`
- Use in any page or component
- Automatically inherit your theme (light/dark mode)
- Responsive design that works on all devices
- SEO-friendly with proper heading structure

## Example Pages

### Full Page
Visit `/under-construction` to see the full version in action.

### Inline Usage
You can use the compact version anywhere in your portfolio:

```tsx
// In your about section
<AboutSection />
<CompactUnderConstruction />

// In your projects section
<ProjectsSection />
<CompactUnderConstruction />
```

The components maintain the same visual quality and design consistency as the rest of your portfolio while clearly communicating that content is being developed.
