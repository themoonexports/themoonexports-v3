# Legacy Code Patterns - Bootstrap Components

## 🎨 Bootstrap 3.x Component Patterns

### Button Patterns

#### v2 Bootstrap Buttons
```html
<!-- Primary Button -->
<button class="btn btn-primary btn-lg">Get Quote</button>

<!-- Secondary Button -->
<button class="btn btn-default">Learn More</button>

<!-- Success Button -->
<button class="btn btn-success">Submit</button>

<!-- Button Groups -->
<div class="btn-group" role="group">
  <button type="button" class="btn btn-default">Option 1</button>
  <button type="button" class="btn btn-default">Option 2</button>
  <button type="button" class="btn btn-default">Option 3</button>
</div>

<!-- Block Button -->
<button class="btn btn-primary btn-block">Full Width Button</button>
```

#### v3 Tailwind Equivalent
```tsx
// Primary Button
<button className="bg-indigo-600 text-white px-6 py-3 text-lg rounded-lg hover:bg-indigo-700 transition-colors">
  Get Quote
</button>

// Secondary Button
<button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition-colors">
  Learn More
</button>

// Success Button
<button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
  Submit
</button>

// Button Groups
<div className="flex rounded-lg overflow-hidden border border-gray-300">
  <button className="px-4 py-2 bg-white hover:bg-gray-50 border-r border-gray-300">Option 1</button>
  <button className="px-4 py-2 bg-white hover:bg-gray-50 border-r border-gray-300">Option 2</button>
  <button className="px-4 py-2 bg-white hover:bg-gray-50">Option 3</button>
</div>

// Block Button
<button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors">
  Full Width Button
</button>
```

### Card/Panel Patterns

#### v2 Bootstrap Panels
```html
<!-- Basic Panel -->
<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">Product Name</h3>
  </div>
  <div class="panel-body">
    <img src="/images/product.jpg" alt="Product" class="img-responsive">
    <p>Product description goes here...</p>
  </div>
  <div class="panel-footer">
    <button class="btn btn-primary">View Details</button>
  </div>
</div>

<!-- Panel with List -->
<div class="panel panel-info">
  <div class="panel-heading">
    <h3 class="panel-title">Product Features</h3>
  </div>
  <div class="panel-body">
    <ul class="list-group">
      <li class="list-group-item">Natural buffalo horn material</li>
      <li class="list-group-item">Antibacterial properties</li>
      <li class="list-group-item">Unique grain patterns</li>
      <li class="list-group-item">Export quality finish</li>
    </ul>
  </div>
</div>
```

#### v3 Tailwind Cards
```tsx
// Basic Card
<div className="bg-white rounded-lg shadow-lg overflow-hidden">
  <div className="bg-gray-50 px-6 py-4 border-b">
    <h3 className="text-lg font-semibold text-gray-900">Product Name</h3>
  </div>
  <div className="p-6">
    <Image
      src="/images/product.jpg"
      alt="Product"
      width={400}
      height={300}
      className="w-full h-48 object-cover rounded-lg mb-4"
    />
    <p className="text-gray-600">Product description goes here...</p>
  </div>
  <div className="bg-gray-50 px-6 py-4 border-t">
    <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
      View Details
    </button>
  </div>
</div>

// Card with List
<div className="bg-white rounded-lg shadow-lg overflow-hidden">
  <div className="bg-blue-50 px-6 py-4 border-b">
    <h3 className="text-lg font-semibold text-blue-900">Product Features</h3>
  </div>
  <div className="p-6">
    <ul className="space-y-3">
      <li className="flex items-center">
        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
        <span className="text-gray-700">Natural buffalo horn material</span>
      </li>
      <li className="flex items-center">
        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
        <span className="text-gray-700">Antibacterial properties</span>
      </li>
      <li className="flex items-center">
        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
        <span className="text-gray-700">Unique grain patterns</span>
      </li>
      <li className="flex items-center">
        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
        <span className="text-gray-700">Export quality finish</span>
      </li>
    </ul>
  </div>
</div>
```

### Modal Patterns

#### v2 Bootstrap Modal
```html
<!-- Modal Trigger -->
<button class="btn btn-primary" data-toggle="modal" data-target="#productModal">
  View Product Details
</button>

<!-- Modal -->
<div class="modal fade" id="productModal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <h4 class="modal-title">Buffalo Horn Plate</h4>
      </div>
      <div class="modal-body">
        <img src="/images/buffalo-horn-plate.jpg" alt="Buffalo Horn Plate" class="img-responsive">
        <p>Premium quality buffalo horn plate with natural grain patterns...</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Request Quote</button>
      </div>
    </div>
  </div>
</div>
```

#### v3 React Modal
```tsx
// Modal Component
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface ProductModalProps {
  product: {
    name: string;
    image: string;
    description: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
          onClick={onClose}
        />

        {/* Modal content */}
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          {/* Header */}
          <div className="bg-gray-50 px-6 py-4 flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6">
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-600">{product.description}</p>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-6 py-4 flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Close
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700">
              Request Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Usage in component
export function ProductCard({ product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg shadow-lg">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            View Product Details
          </button>
        </div>
      </div>

      <ProductModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
```

### Alert Patterns

#### v2 Bootstrap Alerts
```html
<!-- Success Alert -->
<div class="alert alert-success alert-dismissible" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
  <strong>Success!</strong> Your message has been sent successfully.
</div>

<!-- Error Alert -->
<div class="alert alert-danger alert-dismissible" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
  <strong>Error!</strong> There was a problem sending your message.
</div>

<!-- Info Alert -->
<div class="alert alert-info" role="alert">
  <strong>Note:</strong> We respond to all inquiries within 24 hours.
</div>
```

#### v3 React Alerts
```tsx
// Alert Component
'use client';

import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon, ExclamationCircleIcon, InformationCircleIcon } from '@heroicons/react/24/solid';

interface AlertProps {
  type: 'success' | 'error' | 'info' | 'warning';
  title: string;
  message: string;
  dismissible?: boolean;
  onDismiss?: () => void;
}

export default function Alert({ type, title, message, dismissible = false, onDismiss }: AlertProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  if (!isVisible) return null;

  const alertStyles = {
    success: 'bg-green-50 border-green-200 text-green-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
  };

  const icons = {
    success: CheckCircleIcon,
    error: ExclamationCircleIcon,
    info: InformationCircleIcon,
    warning: ExclamationCircleIcon,
  };

  const Icon = icons[type];

  return (
    <div className={`border rounded-lg p-4 ${alertStyles[type]}`}>
      <div className="flex">
        <Icon className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
        <div className="flex-1">
          <h3 className="text-sm font-medium">{title}</h3>
          <p className="mt-1 text-sm">{message}</p>
        </div>
        {dismissible && (
          <button
            onClick={handleDismiss}
            className="ml-3 flex-shrink-0 hover:opacity-75"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
}

// Usage
export function ContactFormWithAlerts() {
  const [alert, setAlert] = useState<{ type: 'success' | 'error', title: string, message: string } | null>(null);

  const handleSubmit = async (data: any) => {
    try {
      // Submit form
      setAlert({
        type: 'success',
        title: 'Success!',
        message: 'Your message has been sent successfully.'
      });
    } catch (error) {
      setAlert({
        type: 'error',
        title: 'Error!',
        message: 'There was a problem sending your message.'
      });
    }
  };

  return (
    <div>
      {alert && (
        <Alert
          type={alert.type}
          title={alert.title}
          message={alert.message}
          dismissible
          onDismiss={() => setAlert(null)}
        />
      )}
      
      <Alert
        type="info"
        title="Note:"
        message="We respond to all inquiries within 24 hours."
      />
      
      {/* Form component */}
    </div>
  );
}
```

### Responsive Utilities

#### v2 Bootstrap Responsive Classes
```html
<!-- Responsive Visibility -->
<div class="visible-xs-block">Only visible on extra small screens</div>
<div class="visible-sm-block">Only visible on small screens</div>
<div class="visible-md-block">Only visible on medium screens</div>
<div class="visible-lg-block">Only visible on large screens</div>

<div class="hidden-xs">Hidden on extra small screens</div>
<div class="hidden-sm">Hidden on small screens</div>

<!-- Responsive Text -->
<p class="text-left text-sm-center text-md-right">Responsive text alignment</p>

<!-- Responsive Columns -->
<div class="row">
  <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
    Responsive column
  </div>
</div>
```

#### v3 Tailwind Responsive Classes
```tsx
// Responsive Visibility
<div className="block sm:hidden">Only visible on mobile</div>
<div className="hidden sm:block md:hidden">Only visible on tablet</div>
<div className="hidden md:block lg:hidden">Only visible on desktop</div>
<div className="hidden lg:block">Only visible on large screens</div>

<div className="hidden sm:block">Hidden on mobile</div>
<div className="sm:hidden">Hidden on tablet and up</div>

// Responsive Text
<p className="text-left sm:text-center md:text-right">Responsive text alignment</p>

// Responsive Grid
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  <div className="bg-white p-4 rounded-lg">
    Responsive grid item
  </div>
</div>

// Responsive Sizing
<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
  Responsive width
</div>

// Responsive Padding/Margin
<div className="p-4 sm:p-6 md:p-8 lg:p-10">
  Responsive padding
</div>
```

### Well/Callout Patterns

#### v2 Bootstrap Wells
```html
<!-- Basic Well -->
<div class="well">
  <h3>Company Overview</h3>
  <p>The Moon Exports has been crafting premium buffalo horn products since 2015...</p>
</div>

<!-- Large Well -->
<div class="well well-lg">
  <h2>Why Choose Our Products?</h2>
  <ul>
    <li>Premium quality materials</li>
    <li>Expert craftsmanship</li>
    <li>Export quality standards</li>
    <li>Worldwide shipping</li>
  </ul>
</div>
```

#### v3 Tailwind Callouts
```tsx
// Basic Callout
<div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
  <h3 className="text-xl font-semibold text-gray-900 mb-3">Company Overview</h3>
  <p className="text-gray-700">The Moon Exports has been crafting premium buffalo horn products since 2015...</p>
</div>

// Large Callout
<div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-8">
  <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Products?</h2>
  <ul className="space-y-2 text-gray-700">
    <li className="flex items-center">
      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
      Premium quality materials
    </li>
    <li className="flex items-center">
      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
      Expert craftsmanship
    </li>
    <li className="flex items-center">
      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
      Export quality standards
    </li>
    <li className="flex items-center">
      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
      Worldwide shipping
    </li>
  </ul>
</div>

// Highlighted Callout
<div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
  <div className="flex">
    <div className="flex-shrink-0">
      <InformationCircleIcon className="h-5 w-5 text-yellow-400" />
    </div>
    <div className="ml-3">
      <h3 className="text-sm font-medium text-yellow-800">Important Notice</h3>
      <p className="mt-1 text-sm text-yellow-700">
        All our products are handcrafted and may have slight variations in color and pattern.
      </p>
    </div>
  </div>
</div>
```

---

**Component Migration Status**: ✅ All Bootstrap components successfully converted to Tailwind/React equivalents
**Functionality Preserved**: ✅ All interactive features maintained and enhanced
