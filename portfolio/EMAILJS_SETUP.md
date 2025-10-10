# 📧 EmailJS Setup Guide for Portfolio Contact Form

## 🎯 Overview
Your portfolio contact form is ready to work with EmailJS! Follow these steps to enable email functionality.

---

## 📋 Step-by-Step Setup

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for free account (100 emails/month free)
3. Verify your email address

### 2. Add Email Service
1. Login to EmailJS dashboard
2. Go to **"Email Services"** → **"Add New Service"**
3. Choose **"Gmail"** (recommended)
4. Connect your Gmail account: `ayushjha115.aj@gmail.com`
5. **Copy the Service ID** (e.g., `service_xyz123`)

### 3. Create Email Template
1. Go to **"Email Templates"** → **"Create New Template"**
2. Use this template:

```
Subject: New Portfolio Contact: {{subject}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
Sent from your portfolio website
```

3. **Copy the Template ID** (e.g., `template_abc456`)

### 4. Get Public Key
1. Go to **"Account"** → **"General"**
2. **Copy your Public Key** (e.g., `user_xyz789`)

### 5. Update Configuration
1. Open `src/config/emailjs.js`
2. Replace the placeholder values:

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_xyz123',     // Your Service ID
  TEMPLATE_ID: 'template_abc456',   // Your Template ID  
  PUBLIC_KEY: 'user_xyz789',        // Your Public Key
  TO_EMAIL: 'ayushjha115.aj@gmail.com'
};
```

---

## ✅ Testing

1. Start your dev server: `npm run dev`
2. Go to `http://localhost:5173`
3. Scroll to Contact section
4. Fill out and submit the form
5. Check your email for the message!

---

## 🔧 Troubleshooting

### Common Issues:

**❌ "Service not found"**
- Check your Service ID is correct
- Ensure service is active in EmailJS dashboard

**❌ "Template not found"**  
- Verify Template ID is correct
- Make sure template is saved and active

**❌ "Invalid public key"**
- Double-check your Public Key
- Ensure no extra spaces or characters

**❌ "Authentication failed"**
- Reconnect your Gmail account
- Check Gmail permissions in EmailJS

---

## 📊 Features Included

✅ **Form Validation** - Required fields
✅ **Loading States** - Shows "Sending..." while processing  
✅ **Success Message** - Confirms message sent
✅ **Error Handling** - Shows helpful error messages
✅ **Auto-reset** - Clears form after successful send
✅ **Responsive Design** - Works on all devices

---

## 🚀 Production Deployment

When deploying to production:
1. Update `src/config/emailjs.js` with your credentials
2. Build: `npm run build`
3. Deploy to Vercel/Netlify/etc.

**Note:** Your credentials are safe in the config file - they're client-side but EmailJS handles security.

---

## 📞 Support

If you need help:
1. Check EmailJS documentation: https://www.emailjs.com/docs/
2. EmailJS support: support@emailjs.com
3. Your portfolio form is already coded - just needs the 3 credentials!

---

**🎉 Once configured, visitors can contact you directly through your portfolio!**
