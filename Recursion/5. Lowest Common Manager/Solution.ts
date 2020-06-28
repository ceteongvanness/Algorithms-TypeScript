class OrgChart {
    name: string;
    directReports: OrgChart[];
  
    constructor(name: string) {
      this.name = name;
      this.directReports = [];
    }
  }
  
  interface OrgInfo {
      lowestCommonManager: OrgChart | null;
      numImportantReports: number;
  }
  
  export function getLowestCommonManager(topManager: OrgChart, reportOne: OrgChart, reportTwo: OrgChart){
    return getOrgInfo(topManager, reportOne, reportTwo).lowestCommonManager;
  }
  
  function getOrgInfo(manager: OrgChart, reportOne: OrgChart, reportTwo: OrgChart): OrgInfo{
      let numImportantReports = 0;
      for (const directReport of manager.directReports){
          const orgInfo = getOrgInfo(directReport, reportOne, reportTwo);
          if (!!orgInfo.lowestCommonManager) return orgInfo;
          numImportantReports += orgInfo.numImportantReports;
      }
      if(manager === reportOne || manager === reportTwo) numImportantReports++;
      const lowestCommonManager = numImportantReports === 2 ? manager : null;
      return {lowestCommonManager, numImportantReports};
  }
  
  