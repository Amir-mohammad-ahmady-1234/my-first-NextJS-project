# 🍕 My First Next.js Project

یک پروژه ساده و کاربردی برای مدیریت و مشاهده غذاها، ساخته‌شده با Next.js 15 و TypeScript.  
در این پروژه می‌توانید لیست غذاها را ببینید، جزئیات هر غذا را مشاهده کنید، غذاهای جدید اضافه کنید و در بخش Community با دیگران تعامل کنید.

---

## 📸 پیش‌نمایش صفحات

- **صفحه اصلی**: نمایش تمامی غذاها  
- **جزئیات غذا** (`/meals/[mealSlug]`): عنوان، خلاصه، دستور پخت و تصویر  
- **فرم اشتراک غذا** (`/meals/share`): افزودن غذای جدید  
- **بخش Community**:  صفحه ای برای join کردن کاربر به cumminity

---

## 🚀 تکنولوژی‌ها و ابزارها

| ابزار / کتابخانه    | توضیح                                               |
|---------------------|-----------------------------------------------------|
| **Next.js 15**      | فریم‌ورک React با پشتیبانی از App Router و SSR      |
| **React 19**        | کتابخانه‌ی اصلی UI                                  |
| **TypeScript**      | تایپ امن و توسعه‌پذیر                               |
| **better-sqlite3**  | دیتابیس SQLite در سمت سرور                         |
| **slugify**         | تولید URL-friendly slug از عنوان غذا                |
| **xss**             | پاک‌سازی ورودی‌های HTML برای جلوگیری از XSS        |
| **CSS Modules**     | استایل ماژولار و scope شده                         |

---

## 📁 ساختار پوشه‌ها

```plaintext
my-first-next-project/
├─ .next/                      ← فایل‌های خروجی build
├─ app/
│  ├─ community/               ← صفحات بخش Community
│  ├─ meals/
│  │  ├─ [mealSlug]/           ← صفحه جزئیات هر غذا
│  │  │   ├─ page.tsx
│  │  │   └─ page.module.css
│  │  └─ share/                ← فرم اشتراک غذا
│  │      ├─ page.tsx
│  │      └─ page.module.css
│  ├─ layout.tsx               ← چیدمان کلی صفحات
│  ├─ page.tsx                 ← صفحه اصلی (لیست غذاها)
│  └─ globals.css  
├─ components/
│  ├─ main-header/             ← کامپوننت هدر
│  ├─ meals/                   ← کارت و گرید غذاها
│  └─ images/                  ← کامپوننت انتخاب تصویر
├─ lib/
│  └─ meals.ts                 ← توابع دسترسی به SQLite
|  └─ action.tsx               ← برای مدریت serverAction
├─ public/                     ← تصاویر ذخیره‌شده
├─ package.json
└─ tsconfig.json


## ⚙️ راه‌اندازی و اجرا

1. **کلون کردن مخزن**  
   ```bash
   git clone https://github.com/Amir-mohammad-ahmady-1234/my-first-next-project.git
   cd my-first-next-project

2. نصب وابستگی‌ها
npm install

3.حالت توسعه (Hot Reload)
npm run dev
# سپس مرورگر را روی http://localhost:3000 باز کنید


4. ساخت نسخه پروداکشن
npm run build

5.اجرای نسخه پروداکشن
npm start
# سپس مرورگر را روی http://localhost:3000 باز کنید

