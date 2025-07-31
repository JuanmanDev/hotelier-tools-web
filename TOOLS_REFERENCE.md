# Tools & Scripts Reference

This document shows the relationship between our tools and the individual scripts that power them.

## Tool-Script Mapping

### Chrome Extensions

#### UI Enhancer
This comprehensive extension combines multiple scripts to enhance the Little Hotelier interface:

**Related Scripts:**
- `tables-full-width` - Makes tables span the full width of the screen
- `compact-calendar-ui` - Optimizes calendar view layout
- `compact-ui-reservation-details` - Streamlines reservation details display
- `prices-display` - Shows prices directly in calendar view
- `improve-style-touch-screens` - Optimizes interface for touch devices
- `auto-refresh-inactivity` - Prevents session timeout
- `extra-invoice-print-button` - Adds additional print options
- `update-number-adults` - Improves adult count management
- `update-payment-link-button` - Enhances payment link functionality
- `bank-transfer-email-button` - Automates bank transfer communications
- `add-button-check-front-desk` - Adds front desk verification controls
- `change-inventory-name` - Allows inventory customization

#### Commission Calculator
Focused on financial transparency for Booking.com reservations:

**Related Scripts:**
- `show-booking-commissions` - Displays commission breakdown and estimates

### Automation Tools

#### Auto Checkout
*Coming Soon* - Automated checkout processing at end of stay

#### Payment Validator  
*Beta* - Comprehensive payment verification system

#### Reservation Monitor
*Available* - Monitors incomplete reservations and payment issues

#### Invoice Manager
*In Development* - Bulk invoice management and validation

## File Structure

```
content/scripts/
├── en/                     # English script documentation
│   ├── auto-refresh-inactivity.md
│   ├── compact-calendar-ui.md
│   ├── show-booking-commissions.md
│   └── ... (other scripts)
├── es/                     # Spanish script documentation
│   ├── auto-refresh-inactivity.md
│   ├── compact-calendar-ui.md
│   └── ... (other scripts)
```

## How to Add New Scripts

1. **Create the script documentation** in `content/scripts/en/` and `content/scripts/es/`
2. **Update the script mapping** in `data/tools.ts`
3. **Update tool features** in the translation files (`i18n/locales/`)
4. **Add images** to `public/images/scripts/[script-name]/`

## Benefits of This System

- **No Copy-Paste**: Features are defined once and referenced
- **Maintainable**: Changes to script features automatically reflect in tools
- **Traceable**: Clear relationship between tools and their component scripts
- **Scalable**: Easy to add new scripts and tools
- **Multilingual**: Supports both English and Spanish documentation

## Script Categories

Scripts are organized by their primary function:

- **Calendar View** - Calendar interface improvements
- **Reservation Details** - Reservation management enhancements  
- **Tables** - Table layout and display optimizations
- **General** - Cross-system improvements
- **Touch Screen** - Mobile and tablet optimizations
- **Pricing** - Price display and calculation features
