class Element{
    async checkInputEmpty(inputField: ChainablePromiseElement) {
        const element = await inputField.getProperty('validationMessage')
        await expect(element).toEqual('Please fill out this field.');
    }
    get errorMessage(){
        return $('.errors');
    }
    async checkErrorMessage(mess:string){
        await expect(this.errorMessage).toBeDisplayed();
        await expect(this.errorMessage).toHaveText(mess);
    }
}
export default new Element();