using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ContactManagement.Models.DAL
{
    interface IContactRepository : IDisposable
    {
        IEnumerable<ContactInfo> GetAll();
        ContactInfo Get(int id);
        void Add(ContactInfo contactinfo);
        void Update(ContactInfo contactinfo);
        int Delete(int id);
        void save();
    }
}
