document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // منع إرسال النموذج تلقائيًا

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let storedUser = localStorage.getItem("user");

    if (!storedUser) {
        alert("لا يوجد حساب بهذا البريد الإلكتروني. يرجى التسجيل أولاً.");
        return;
    }

    let user = JSON.parse(storedUser);

    if (email === user.email && password === user.password) {
        alert("تم تسجيل الدخول بنجاح!");
        window.location.href = "index.html"; // توجيه المستخدم إلى الصفحة الرئيسية
    } else {
        alert("البريد الإلكتروني أو كلمة المرور غير صحيحة.");
    }
});
