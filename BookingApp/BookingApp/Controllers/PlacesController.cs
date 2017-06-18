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
    public class PlacesController : ApiController
    {
        private BAContext db = new BAContext();

        // GET: api/Places
        [HttpGet]
        [Route("Places", Name = "Plac")]
        public IQueryable<Place> GetPlaces()
        {
            return db.Places;
        }

        // GET: api/Places/5
        [HttpGet]
        [Route("Places/{id}")]
        [ResponseType(typeof(Place))]
        public IHttpActionResult GetPlace(int id)
        {
            Place place = db.Places.Find(id);
            if (place == null)
            {
                return NotFound();
            }

            return Ok(place);
        }

        // PUT: api/Places/5
        [Authorize(Roles = "Admin, Manager")]
        [HttpGet]
        [Route("Places/{id}")]
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPlace(int id, Place place) //changePlace
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != place.Id)
            {
                return BadRequest();
            }

            db.Entry(place).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PlaceExists(id))
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

        // POST: api/Places
      //  [Authorize(Roles = "Admin, Manager")]
        [HttpPost]
        [Route("Places")]
        [ResponseType(typeof(Place))]
        public IHttpActionResult PostPlace(Place place) //addPlace
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Places.Add(place);
            db.SaveChanges();

            return CreatedAtRoute("Plac", new { id = place.Id }, place);
        }

        // DELETE: api/Places/5
      //  [Authorize(Roles = "Admin, Manager")]
        [HttpDelete]
        [Route("Places/{id}")]
        [ResponseType(typeof(Place))]
        public IHttpActionResult DeletePlace(int id) //deletePlace
        {
            Place place = db.Places.Find(id);
            if (place == null)
            {
                return NotFound();
            }

            db.Places.Remove(place);
            db.SaveChanges();

            return Ok(place);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PlaceExists(int id)
        {
            return db.Places.Count(e => e.Id == id) > 0;
        }
    }
}