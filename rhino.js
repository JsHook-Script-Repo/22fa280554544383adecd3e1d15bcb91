var currentPackageName = common.getlpparam().packageName;
//请手动将同方法的hook移至同一个hook代码内，否则后面的不会生效
if (currentPackageName == 'com.colanotes.android') {
    //解锁高级版
common.hookMethod('j0.b', 'a', ['java.lang.String','boolean'], function (param) {
     param.setResult(java.lang.Boolean.valueOf('true'));
}, function (param) {
    
}); 


} 
