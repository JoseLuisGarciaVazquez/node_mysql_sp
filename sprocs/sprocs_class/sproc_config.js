class Mysql_config{
    static get mysql_config(){
      return {
        connectionLimit:10,
        host: 'pia-staging-db-main-master-svc.pia-staging.svc.cluster.local',
        user: 'user_db_test',
        password: 'P1a-T3st-U53r_DB*',
        database: 'pia-test'
      };
    }
  }
  module.exports = Mysql_config.mysql_config;
