
document.addEventListener('DOMContentLoaded', function() {
    const inventory = document.getElementById('inventory');
    const btn = document.getElementById('expand-inventory-btn');
    const arrow = document.getElementById('expand-arrow');
    let expanded = false;

    btn.addEventListener('click', function() {
        expanded = !expanded;
        inventory.classList.toggle('expanded', expanded);
        btn.firstChild.textContent = expanded ? 'Show less' : 'Show more';
        // Arrow rotates via CSS
    });
});
