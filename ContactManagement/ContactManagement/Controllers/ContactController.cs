using ContactManagement.Models;
using ContactManagement.Models.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ContactManagement.Controllers
{
    public class ContactController : Controller
    {
        private IContactRepository _iContact;

        public ContactController()
        {
            this._iContact = new ContactRepository(new ContactManagementEntities());
        }

        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult List()
        {
            return Json(_iContact.GetAll(), JsonRequestBehavior.AllowGet);
        }

        public JsonResult Add(Contact cn)
        {
            ContactInfo cnf = new ContactInfo();
            if (ModelState.IsValid)
            {
                cnf.FirstName = cn.FirstName;
                cnf.LastName = cn.LastName;
                cnf.EmailAddress = cn.EmailAddress;
                cnf.PhoneNumber = cn.PhoneNumber;
                cnf.IsActive = cn.Status;
                _iContact.Add(cnf);
                _iContact.save();
            }
            return Json(cnf, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetbyID(int ID)
        {
            var contact = _iContact.Get(ID);
            return Json(contact, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Update(Contact cn)
        {
            ContactInfo cnf = new ContactInfo();
            if (ModelState.IsValid)
            {
                cnf.Id = cn.Id;
                cnf.FirstName = cn.FirstName;
                cnf.LastName = cn.LastName;
                cnf.EmailAddress = cn.EmailAddress;
                cnf.PhoneNumber = cn.PhoneNumber;
                cnf.IsActive = cn.Status;
                _iContact.Update(cnf);
                _iContact.save();
            }
            return Json(cnf, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Delete(int ID)
        {
            _iContact.Delete(ID);
            _iContact.save();
            return Json(_iContact.Delete(ID), JsonRequestBehavior.AllowGet);
        }
    }
}
