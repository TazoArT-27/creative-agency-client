import React from 'react';

const AdminForm = () => {
    return (
        <div>
            <section>
            <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input placeholder="jon@gmail.com"  type="email" class="input-box form-control"/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </section>
        </div>
    );
};

export default AdminForm;