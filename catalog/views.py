from django.shortcuts import render

# Create your views here.
def catalog(request):
    return render(request, 'catalog/catalog.html')

def product_detail(request, product_id):
    return render(request, 'catalog/detail.html', {'product_id': product_id})