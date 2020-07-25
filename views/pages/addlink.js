let addlink = {
    render : async () => {
        let view =  /*html*/`
             <div class="card">
             <div class="card-header">Add link form</div>  
             <div class="card-body">            
             
              <center>
              <form>
                <fieldset disabled>
                  <div class="form-group col-md-4">
                    <label for="disabledTextInput">title link</label>
                    <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input">
                  </div>
                  <div class="form-group col-md-4">
                    <label for="disabledSelect">select</label>
                    <select id="disabledSelect" class="form-control">
                      <option>Disabled select</option>
                    </select>
                  </div>
              
                  <button type="submit" class="btn btn-primary">Submit</button>

                </fieldset>
              </form>
              </center>
                      
            </div>
            </div>
        `
        return view
    },
    after_render: async () => {}
        
}

export default addlink;