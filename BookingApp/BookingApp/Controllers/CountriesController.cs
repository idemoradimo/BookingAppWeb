﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using BookingApp.Models;

namespace BookingApp.Controllers
{
    [RoutePrefix("api")]
    public class CountriesController : ApiController
    {
        private BAContext db = new BAContext();

        // GET: api/Countries
        [HttpGet]
        [Route("Countries", Name = "Countr")]
        public IQueryable<Country> GetCountries()
        {
            return db.Countries;
        }

        // GET: api/Countries/5
        [HttpGet]
        [Route("Countries/{id}")]
        [ResponseType(typeof(Country))]
        public IHttpActionResult GetCountry(int id)
        {
            Country country = db.Countries.Find(id);
            if (country == null)
            {
                return NotFound();
            }

            return Ok(country);
        }

        // PUT: api/Countries/5
        [Authorize(Roles = "Admin, Manager")]
        [HttpPut]
        [Route("Countries/{id}")]
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCountry(int id, Country country) //changeCountry
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != country.Id)
            {
                return BadRequest();
            }

            db.Entry(country).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CountryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Countries
     //   [Authorize(Roles = "Admin, Manager")]
        [HttpPost]
        [Route("Countries")]
        [ResponseType(typeof(Country))]
        public IHttpActionResult PostCountry(Country country) //addCountry
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Countries.Add(country);
            db.SaveChanges();

            return CreatedAtRoute("Countr", new { id = country.Id }, country);
        }

        // DELETE: api/Countries/5
        [Authorize(Roles = "Admin, Manager")]
        [HttpPost]
        [Route("Countries/{id}")]
        [ResponseType(typeof(Country))]
        public IHttpActionResult DeleteCountry(int id) //deleteCountry
        {
            Country country = db.Countries.Find(id);
            if (country == null)
            {
                return NotFound();
            }

            db.Countries.Remove(country);
            db.SaveChanges();

            return Ok(country);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CountryExists(int id)
        {
            return db.Countries.Count(e => e.Id == id) > 0;
        }
    }
}