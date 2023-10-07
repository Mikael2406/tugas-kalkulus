function calculateQuadratic() {
    // Mendapatkan nilai a, b, dan c dari formulir
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    // Menghitung diskriminan
    const discriminant = Math.pow(b, 2) - 4 * a * c;

    if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        document.getElementById('result').textContent = `Akar 1: ${root1}, Akar 2: ${root2}`;
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        document.getElementById('result').textContent = `Akar tunggal: ${root}`;
    } else {
        document.getElementById('result').textContent = 'Tidak ada akar real.';
    }
}
