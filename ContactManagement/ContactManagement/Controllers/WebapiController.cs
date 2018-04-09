using ContactManagement.Models;
using ContactManagement.Models.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ContactManagement.Controllers
{
    public class WebapiController : ApiController
    {
        private IContactRepository _icontact;

        public WebapiController()
        {
            this._icontact = new ContactRepository(new ContactManagementEntities());
        }


        public IEnumerable<ContactInfo> Get()
        {
            return _icontact.GetAll();
        }

        // GET api/values/5
        public ContactInfo Get(int id)
        {
            return _icontact.Get(id);
            // return db.ContactInfoes.Find(id);
            //return "value";
        }

        // POST api/webapi
        public void Post([FromBody]string value)
        {
        }

        // PUT api/webapi/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/webapi/5
        public void Delete(int id)
        {
        }
    }
}
