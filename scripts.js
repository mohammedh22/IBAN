const banks = [
    { 'samaCode': '55', 'bankName': 'Banque Saudi Fransi', 'nameEn': 'Banque Saudi Fransi', 'nameAr': 'البنك السعودي الفرنسي' },
    { 'samaCode': '80', 'bankName': 'Alrajhi Bank', 'nameEn': 'Alrajhi Bank', 'nameAr': 'بنك الراجحي' },
    { 'samaCode': '10', 'bankName': 'National Commercial Bank', 'nameEn': 'National Commertial Bank', 'nameAr': 'البنك الأهلي التجاري' },
    { 'samaCode': '45', 'bankName': 'Saudi British Bank', 'nameEn': 'SABB', 'nameAr': 'ساب' },
    { 'samaCode': '20', 'bankName': 'Riyadh Bank', 'nameEn': 'Riyad Bank', 'nameAr': 'بنك الرياض' },
    { 'samaCode': '40', 'bankName': 'Saudi American Bank', 'nameEn': 'SAMBA', 'nameAr': 'سامبا' },
    { 'samaCode': '05', 'bankName': 'Alinma Bank', 'nameEn': 'AL Inma Bank', 'nameAr': 'بنك الانماء' },
    { 'samaCode': '50', 'bankName': 'Alawwal bank', 'nameEn': 'AlAwwal Bank', 'nameAr': 'البنك الأول' },
    { 'samaCode': '60', 'bankName': 'Bank AlJazira', 'nameEn': 'Bank Aljazerah', 'nameAr': 'بنك الجزيرة' },
    { 'samaCode': '65', 'bankName': 'Saudi Investment Bank', 'nameEn': 'Saudi Investment Bank', 'nameAr': 'البنك السعودي للأستثمار' },
    { 'samaCode': '15', 'bankName': 'Bank AlBilad', 'nameEn': 'BANK ALBELAD', 'nameAr': 'بنك البلاد' },
    { 'samaCode': '30', 'bankName': 'Arab National Bank', 'nameEn': 'Arab National Bank', 'nameAr': 'البنك العربي الوطني' },
    { 'samaCode': '90', 'bankName': 'GULF Bank', 'nameEn': 'Gulf International Bank', 'nameAr': 'بنك الخليج' },
    { 'samaCode': '95', 'bankName': 'Emirates Bank', 'nameEn': 'EMARITE BANK', 'nameAr': 'بنك الامارات' },
    { 'samaCode': '76', 'bankName': 'Bank Muscat', 'nameEn': 'Bank Muscat', 'nameAr': 'بنك مسقط' },
    { 'samaCode': '71', 'bankName': 'National Bank of Bahrain', 'nameEn': 'National Bank Of Bahrain', 'nameAr': 'بنك البحرين الوطني' },
    { 'samaCode': '75', 'bankName': 'National Bank of Kuwait', 'nameEn': 'National Bank of Kuwait', 'nameAr': 'بنك الكويت الوطني' },
    { 'samaCode': '85', 'bankName': 'BNP Paribas Bank', 'nameEn': 'BNP PARIBAS SAUDI ARABIA', 'nameAr': 'بي ان بي باريبوس' }
];

function isValidIban(iban) {
    const ibanRegex = /^[A-Z0-9]{15,34}$/; 
    return ibanRegex.test(iban);
}

function checkIban() {
    let iban = document.getElementById('ibanInput').value;

    iban = iban.replace(/\s+/g, '');

    const resultDiv = document.getElementById('result');

    if (!isValidIban(iban)) {
        resultDiv.innerHTML = '<span class="error">رقم الـ IBAN غير صالح.</span>';
        return;
    }

    const samaCode = iban.slice(4, 6); 

    const bank = banks.find(b => b.samaCode === samaCode);

    if (bank) {
        resultDiv.innerHTML = `<strong>اسم البنك:</strong> ${bank.nameAr}<br><strong>رمز البنك (SamaCode):</strong> ${bank.samaCode}`;
    } else {
        resultDiv.innerHTML = '<span class="error">لم يتم العثور على معلومات البنك لهذا الـ IBAN.</span>';
    }
}