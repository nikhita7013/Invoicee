import React, { useState } from 'react';
import InvoiceModal from './InvoiceModal';

const ParentComponent = () => {
  // Define states
  const [isOpen, setIsOpen] = useState(false);
  const [invoiceInfo, setInvoiceInfo] = useState({
    invoiceNumber: '12345',
    cashierName: 'John Doe',
    customerName: 'Jane Doe',
    subtotal: 1000,
    discountRate: 100,
    taxRate: 50,
    total: 950,
  });
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', qty: 2, price: 500 },
  ]);

  const reviewInvoiceHandler = () => {
    setIsOpen(true);
  };

  const addNextInvoiceHandler = () => {
    // Handle adding the next invoice
    console.log('Adding the next invoice...');
  };

  return (
    <div>
      {/* Tax and Discount fields */}
      <div className="mt-4 flex flex-col space-y-2 px-4 pb-6">
        {/* Discount */}
        <div className="flex w-full justify-between">
          <span className="font-bold">Discount:</span>
          <span>₹{invoiceInfo.discountRate.toFixed(2)}</span>
        </div>

        {/* Tax */}
        <div className="flex w-full justify-between">
          <span className="font-bold">Tax:</span>
          <span>₹{invoiceInfo.taxRate.toFixed(2)}</span>
        </div>

        {/* Review Invoice Button */}
        <button
          onClick={reviewInvoiceHandler}
          className="flex w-full items-center justify-center space-x-1 rounded-md bg-blue-500 py-2 text-sm text-white shadow-sm hover:bg-blue-600"
        >
          <span>Review Invoice</span>
        </button>
      </div>

      {/* Invoice Modal */}
      <InvoiceModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        invoiceInfo={invoiceInfo}
        items={items}
        onAddNextInvoice={addNextInvoiceHandler}
      />
    </div>
  );
};

export default ParentComponent;
