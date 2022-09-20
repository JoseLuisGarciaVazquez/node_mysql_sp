const SP_GETMESSAGE = { name:'SP_GETMESSAGE',query:
    `CREATE PROCEDURE SP_GETMESSAGE(
        IN var_name VARCHAR(20),
        IN var_id CHAR(255)
    )
    BEGIN
        SELECT * from agents where name = var_name and phone in (var_id);
    END`}


const SP_nombre = {name: 'SP_nombre',query: `CREATE PROCEDURE SP_nombre(
    IN description TEXT,  
	IN agent_company_id INT,  
	IN detail_execution_level_policy JSON, 
	IN description_error TEXT,  
	IN success TINYINT, 
	IN catalog_actions_id INT 
)
BEGIN
	
		INSERT INTO activity_log ( description, agent_company_id, detail_execution_level_policy, description_error,success, catalog_actions_id)
	VALUES
		( description, agent_company_id, detail_execution_level_policy, description_error, success, catalog_actions_id );
END`}

const SP_test2 = {name: 'SP_test2',query: `CREATE PROCEDURE SP_test2(
    )
    BEGIN
        SELECT * FROM agents;
    END`}

const SP_test3 = {name: 'SP_test3',query: `CREATE PROCEDURE SP_test3(
        )
        BEGIN
            SELECT * FROM rol;
        END`} 

 const SP_test5 = {name: 'SP_test5',query: `CREATE PROCEDURE SP_test5(
            )
            BEGIN
               SELECT * FROM ticket;
            END`} 
    
const all_store_procedure = [
    SP_GETMESSAGE,
    SP_nombre,
    SP_test2,
    SP_test3,
    SP_test5
,]

module.exports = all_store_procedure
