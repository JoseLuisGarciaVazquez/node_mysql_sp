const Stored_procedure_helper = require('./sprocs_class/sproc_helper')

const run_sp = (name,arg,res = null)=>{
    const sp_helper = new Stored_procedure_helper(name,arg)
    return sp_helper.get_data_by_sp(name,arg,res);
}
const get_sp_def = (routine_schema,sproc_name,res = null)=>{
    const sp_helper = new Stored_procedure_helper(sproc_name)
    return sp_helper.get_sp_defination(routine_schema,sproc_name,res);
}
const drop_sp = (sproc_name,res = null)=>{
    const sp_helper = new Stored_procedure_helper(sproc_name)
    return sp_helper.drop_procedure(sproc_name,res);
}

module.exports = {run_sp,get_sp_def,drop_sp};