import ResetButton from '../../components/ResetButton';

const getSteps = (setChatbotKey) => [
  
    {
      id: 'account-type-question',
      message: 'What type of account do you have?',
      trigger: 'account-type-options'
    },
    {
      id: 'account-type-options',
      options: [
        { value: 'seller', label: 'Seller', trigger: 'seller-response' },
        { value: 'buyer', label: 'Buyer', trigger: 'buyer-response' }
      ]
    },
    
    // Seller Questions & Answers
    {
      id: 'seller-response',
      message: 'Great! Choose a question you have as a seller:',
      trigger: 'seller-questions'
    },
    {
      id: 'seller-questions',
      options: [
        { value: 'list-product', label: 'How do I list a product?', trigger: 'answer-list-product' },
        { value: 'fees', label: 'What are the fees for selling?', trigger: 'answer-fees' },
        { value: 'manage-inventory', label: 'How do I manage my inventory?', trigger: 'answer-manage-inventory' },
        { value: 'offer-discounts', label: 'Can I offer discounts?', trigger: 'answer-offer-discounts' },
        { value: 'handle-returns', label: 'How do I handle returns?', trigger: 'answer-handle-returns' },
        { value: 'reset', label: 'Start Over', trigger: 'reset-option' }
      ],
    },
    {
      id: 'answer-list-product',
      message: 'To list a product, go to your dashboard and click on "Add Product". Follow the instructions provided.',
      trigger: 'seller-questions'
    },
    {
      id: 'answer-fees',
      message: 'We charge a 5% commission on every sale. There are no additional listing fees.',
      trigger: 'seller-questions'
    },
    {
      id: 'answer-manage-inventory',
      message: 'You can manage your inventory from your seller dashboard. There, you can update product quantities, add new items, or remove listings.',
      trigger: 'seller-questions'
    },
    {
      id: 'answer-offer-discounts',
      message: 'Yes, you can offer discounts by creating promotional codes or setting up sales events from your dashboard.',
      trigger: 'seller-questions'
    },
    {
      id: 'answer-handle-returns',
      message: "You can set your return policy in your seller settings. If a buyer initiates a return, you'll receive a notification to process it.",
      trigger: 'seller-questions'
    },
  
    // Buyer Questions & Answers
    {
      id: 'buyer-response',
      message: 'Awesome! Choose a question you have as a buyer:',
      trigger: 'buyer-questions'
    },
    {
      id: 'buyer-questions',
      options: [
        { value: 'make-purchase', label: 'How do I make a purchase?', trigger: 'answer-make-purchase' },
        { value: 'payment-methods', label: 'What are the payment methods?', trigger: 'answer-payment-methods' },
        { value: 'track-order', label: 'How do I track my order?', trigger: 'answer-track-order' },
        { value: 'return-product', label: 'Can I return a product?', trigger: 'answer-return-product' },
        { value: 'contact-seller', label: 'How do I contact a seller?', trigger: 'answer-contact-seller' },
        { value: 'reset', label: 'Start Over', trigger: 'reset-option' }
      ],
    },
    {
      id: 'answer-make-purchase',
      message: 'To make a purchase, browse the product listings, add items to your cart, and proceed to checkout.',
      trigger: 'buyer-questions'
    },
    {
      id: 'answer-payment-methods',
      message: 'We accept credit cards, debit cards, and PayPal. All transactions are secure.',
      trigger: 'buyer-questions'
    },
    {
      id: 'answer-track-order',
      message: 'After making a purchase, you will receive a confirmation email with a tracking number. You can use this number on our website to track your order.',
      trigger: 'buyer-questions'
    },
    {
      id: 'answer-return-product',
      message: "Yes, you can return products within 30 days of purchase. Please check the seller's return policy for specific details.",
      trigger: 'buyer-questions'
    },
    {
      id: 'answer-contact-seller',
      message: 'You can contact a seller directly from the product listing page. There will be a "Contact Seller" button or link.',
      trigger: 'buyer-questions'
    },

    {
        id: 'reset-option',
        component: <ResetButton setChatbotKey={setChatbotKey} />,
        waitAction: true
      },
     
  
    
      
  ];
  
  export default getSteps;
  