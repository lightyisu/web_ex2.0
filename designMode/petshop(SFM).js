var factoryPet={
    getPet:function(kind){
        var pet;
        switch(kind){
            case 'dog':
                pet=new Dog();
            break;
            case 'cat':
                pet=new Cat();
            break;
            case 'pig':
                pet=new Pig();
            break;
            default:
                pet=new Bird();
        }
        Interface.ensureImplement

    }
}