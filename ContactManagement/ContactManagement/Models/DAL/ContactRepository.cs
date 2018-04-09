using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ContactManagement.Models.DAL
{
    public class ContactRepository : IContactRepository
    {
        private ContactManagementEntities _context;

        public ContactRepository(ContactManagementEntities context)
        {
            this._context = context;
        }

        public IEnumerable<ContactInfo> GetAll()
        {
            return _context.ContactInfoes.ToList();
        }

        public ContactInfo Get(int id)
        {
            return _context.ContactInfoes.Find(id);
        }

        public void Add(ContactInfo contactinfo)
        {
            _context.ContactInfoes.Add(contactinfo);

        }

        public void Update(ContactInfo contactinfo)
        {
            _context.Entry(contactinfo).State = System.Data.Entity.EntityState.Modified;
        }

        public int Delete(int id)
        {
            ContactInfo contact = _context.ContactInfoes.Find(id);
            if (contact != null)
            {
                _context.ContactInfoes.Remove(contact);
                return 1;
            }
            else
                return 0;
        }

        public void save()
        {
            _context.SaveChanges();
        }

        public void Dispose()
        {
            throw new NotImplementedException();
        }
    }
}