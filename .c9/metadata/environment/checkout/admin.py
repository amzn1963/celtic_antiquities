{"filter":false,"title":"admin.py","tooltip":"/checkout/admin.py","ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":7,"column":0},"end":{"row":7,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"hash":"30221838ae8becaecf29af07d5be79f6f30312e2","undoManager":{"mark":1,"position":1,"stack":[[{"start":{"row":1,"column":0},"end":{"row":12,"column":38},"action":"insert","lines":["from .models import Order, OrderLineItem","","","class OrderLineAdminInline(admin.TabularInline):","    model = OrderLineItem","","","class OrderAdmin(admin.ModelAdmin):","    inlines = (OrderLineAdminInline, )","","","admin.site.register(Order, OrderAdmin)"],"id":2}],[{"start":{"row":13,"column":0},"end":{"row":13,"column":28},"action":"remove","lines":["# Register your models here."],"id":3}]]},"timestamp":1569404286429}