
class MyValidation{
    removeDiacritics(str: string) {
        return str
            .normalize('NFD') // Chuyển đổi sang dạng chuẩn NFD
            .replace(/[\u0300-\u036f]/g, ''); // Loại bỏ dấu
    } 
}

export default new MyValidation();