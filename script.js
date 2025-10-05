// ===========================================
// كود القوائم المنسدلة (المصحح)
// ===========================================
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. تحديد جميع أزرار القوائم القابلة للطي
    const toggleButtons = document.querySelectorAll('.toggle-button');

    // 2. المرور على كل زر وتعيين مستمع للنقرات
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            
            // 3. تحديد هوية المحتوى المستهدف من خاصية data-target في الزر
            const targetSelector = this.getAttribute('data-target');
            // البحث عن المحتوى باستخدام هويته (#content1، #content2، إلخ)
            const content = document.querySelector(targetSelector);
            
            // 4. فحص حالة المحتوى وتغييرها
            if (content) { // التأكد من وجود المحتوى
                if (content.classList.contains('active')) {
                    // إذا كان مفتوحاً، فقم بإغلاقه
                    content.classList.remove('active');
                } else {
                    // إذا كان مغلقاً، فقم بفتحه
                    content.classList.add('active');
                }
            }
        });
    });

    // ... (هنا يأتي كود التحقق من النموذج contactForm إذا كنت قد أضفته)
});

// ===========================================
// التحقق من صحة نموذج التواصل (Form Validation)
// ===========================================
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. تحديد النموذج وعنصر رسالة الخطأ
    const form = document.getElementById('contactForm');
    const errorMessageDiv = document.getElementById('error-message');

    if (form) { // تأكد من أن النموذج موجود في الصفحة (لن يعمل إلا في contact.html)
        form.addEventListener('submit', function(event) {
            
            // منع الإرسال التلقائي للنموذج
            event.preventDefault(); 
            
            // مسح أي رسائل خطأ سابقة
            errorMessageDiv.textContent = ''; 

            // 2. الحصول على قيم الحقول
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            let isValid = true;
            let errors = [];

            // 3. التحقق من حقل الاسم
            if (name === '') {
                errors.push('الرجاء إدخال اسمك.');
                isValid = false;
            }

            // 4. التحقق من حقل البريد الإلكتروني (التحقق من أنه ليس فارغاً فقط)
            if (email === '') {
                errors.push('الرجاء إدخال بريدك الإلكتروني.');
                isValid = false;
            } 
            
            // 5. التحقق من حقل الرسالة
            if (message === '') {
                errors.push('الرجاء كتابة رسالتك.');
                isValid = false;
            }

            // 6. إذا لم يكن صالحاً، أظهر الأخطاء
            if (!isValid) {
                errorMessageDiv.innerHTML = errors.join('<br>');
            } else {
                // 7. إذا كان صالحاً، أظهر رسالة نجاح مؤقتة (لأننا لا نستخدم سيرفر حقيقي)
                errorMessageDiv.style.color = 'green';
                errorMessageDiv.innerHTML = 'تم استلام رسالتك بنجاح! شكراً لتواصلك.';
                
                // يمكنك إضافة كود هنا لإرسال البيانات إلى السيرفر في مشروع حقيقي
                form.reset(); // مسح الحقول بعد النجاح
            }
        });
    }
});