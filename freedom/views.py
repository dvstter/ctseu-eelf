from django.shortcuts import render
from datetime import datetime

def home(request):
    t = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    context = {'time_str': t}
    return render(request, 'home.html', context)